import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRefresher, IonRefresherContent, IonInput, IonTextarea, IonButton } from '@ionic/react';
import React from 'react';
import axios from 'axios';

const Login: React.FC = () => {

  let username:any, password:any;
  let urlDB = 'http://localhost:3000/api/';

  function handleUsername(event: any) 
  {
    username=event;
  }
  function handlePassword(event: any) 
  {
    password=event;
  }

  function loginsend()
  {
    console.log("nome: "+username+", corpo: "+password+" verso "+urlDB+"login");
    axios({
      method: 'post',
      url: urlDB+'login',
      data: {
        usr: username,
        psw: password
      }
    });

    console.log('inviata!');
  
    //doRefresh();
  }
  
  function doRefresh()
  {
    window.location.reload();
  }
    

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Admin</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Admin</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Login</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
  
            <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
              <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
  
            
            
              <IonInput 
                    placeholder="Username" 
                    type="text" 
                    value={username}
                    onIonChange={(e) => handleUsername((e.target as HTMLInputElement).value)}
                    id="inputNomeNota"
                    required >
              </IonInput>
      
              <IonInput 
                  placeholder="Password"
                  type="password"
                  value={password} 
                  onIonChange={e => handlePassword(e.detail.value!)} 
              >
              </IonInput>
  
              <IonButton onClick={loginsend}>INVIA</IonButton>
  
            </IonCardContent>
          </IonCard>
  
          
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Login;