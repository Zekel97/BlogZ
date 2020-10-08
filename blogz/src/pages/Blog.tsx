import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar,withIonLifeCycle  } from '@ionic/react';
import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {

  public state = {
    posts: []
  }

  ionViewDidEnter() {
    axios.get("http://localhost:3000/api/posts")
    .then((res) => {
      this.setState({posts: res.data.data.posts});
    });
  }

  doRefresh()
  {
    window.location.reload();
  }
  render(){
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Blog</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>

          <IonRefresher slot="fixed" onIonRefresh={this.doRefresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>

          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blog</IonTitle>
            </IonToolbar>
          </IonHeader>

          {this.state.posts.reverse().map((item:any,index) => (

            <IonCard key={index}>

              <IonCardHeader>
                <IonCardTitle>
                  <h1>{item.title}</h1>
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <p>{item.body}</p>
              </IonCardContent>
            
            </IonCard>

        ))}

        </IonContent>
      </IonPage>
    );
  }
};

export default withIonLifeCycle(Blog);