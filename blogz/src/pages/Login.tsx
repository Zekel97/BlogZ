import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRefresher, IonRefresherContent, IonInput, IonTextarea, IonButton } from '@ionic/react';
import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

  public state = {
    username: "",
    password: "",
    urlDB: "http://localhost:3000/api/posts/",
    loginDone: false,
    nomePost: "",
    corpoPost: "",
    errorLogin: false,
    postSent: false
  }
  
  doRefresh()
  {
    window.location.reload();
  }
  loginSend = () => { 
    axios.post(this.state.urlDB+'login',
    {
      usr: this.state.username,
      psw: this.state.password
    }).then((res) => {
      if(res.data.data === "ok")
      {
        this.setState({loginDone:true});
        this.setState({errorLogin: false});
      }
      else
      {
        this.setState({errorLogin: true})
      }
    })
    
  }
  postSend = () =>
  {

    axios.post(this.state.urlDB,
    {
      title: this.state.nomePost,
      body: this.state.corpoPost
    }).then((res) => {
      if(res.data.status === "success")
      {
        this.setState({postSent: true});
      }
    })
  }
  render(){
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
            
            {!this.state.loginDone &&
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Login</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              <IonRefresher slot="fixed" onIonRefresh={this.doRefresh}>
                <IonRefresherContent></IonRefresherContent>
              </IonRefresher>
              
                <IonInput 
                      placeholder="Username" 
                      type="text" 
                      onIonChange={(e) => this.setState({username: e.detail.value})}
                      required >
                </IonInput>
        
                <IonInput 
                    placeholder="Password"
                    type="password"
                    onIonChange={e => this.setState({password: e.detail.value})} 
                >
                </IonInput>
    
                <IonButton onClick={this.loginSend}>INVIA</IonButton>

              </IonCardContent>
              {this.state.errorLogin && 
                <IonCard>
                  <IonCardContent color="red">
                    <h2 ><b>Error Login</b></h2>
                  </IonCardContent>
                </IonCard>
              }
            </IonCard>
            }

            {this.state.loginDone && 
                      <IonCard>
                      <IonCardHeader>
                        <IonCardTitle>Crea Nuovo Post</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
            
                      <IonRefresher slot="fixed" onIonRefresh={this.doRefresh}>
                        <IonRefresherContent></IonRefresherContent>
                      </IonRefresher>
            
                      
                      
                        <IonTextarea
                              placeholder="Nome Post"
                              onIonChange={(e) => this.setState({nomePost: e.detail.value})}
                              required
                              auto-grow={true} >
                        </IonTextarea>
                
                        <IonTextarea
                            placeholder="Corpo Post"
                            onIonChange={(e) => this.setState({corpoPost: e.detail.value})}
                            required
                            auto-grow={true} >
                        </IonTextarea>
            
                        <IonButton onClick={this.postSend}>INVIA</IonButton>
            
                      </IonCardContent>
                      {this.state.postSent && 
                        <IonCard>
                          <IonCardContent color="green">
                            <h2 ><b>Post Inviato!</b></h2>
                          </IonCardContent>
                        </IonCard>
                      }
                    </IonCard>
            
            }
            
          </IonContent>
        </IonContent>
      </IonPage>
    );
  }
};

export default Login;