import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRefresher, IonRefresherContent, IonInput, IonTextarea, IonButton } from '@ionic/react';
import React from 'react';
import axios from 'axios';

const AdminPage: React.FC = () => {

  let nomePost:any, corpoPost:any;
  let urlDB = 'http://localhost:3000/api/';

  function handleNomePost(event: any) 
{
  nomePost=event;
}
function handleCorpoPost(event: any) 
{
  corpoPost=event;
}

  function inviaPost()
  {
    console.log("nome: "+nomePost+", corpo: "+corpoPost);
    axios({
      method: 'post',
      url: urlDB+'posts',
      data: {
        title: nomePost,
        body: corpoPost
      }
    });
    console.log('inviata!');
  
    doRefresh();
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
          {/* QUESTO PURE E' SOLO UN PEZZO DA QUA */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Crea Nuovo Post</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
  
            <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
              <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
  
            
            
              <IonInput 
                    placeholder="Nome Post" 
                    type="text" 
                    value={nomePost}
                    onIonChange={(e) => handleNomePost((e.target as HTMLInputElement).value)}
                    id="inputNomeNota"
                    required >
              </IonInput>
      
              <IonTextarea 
                  placeholder="Corpo Post"
                  value={corpoPost} 
                  onIonChange={e => handleCorpoPost(e.detail.value!)} 
                  auto-grow={true} >
              </IonTextarea>
  
              <IonButton onClick={inviaPost}>INVIA</IonButton>
  
            </IonCardContent>
          </IonCard>
          {/* A QUA */}
          
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default AdminPage;