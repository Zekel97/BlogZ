import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import React from 'react';
import axios from 'axios';

const Blog: React.FC = () => {

  var state = {
    title : "",
    body : ""
  }

    useIonViewDidEnter(() => {
        axios.get("http://localhost:3000/api/posts")
        .then((res) => {
          console.log(res.data.data.posts);
          state = res.data.data.posts;
        })
      });

    

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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blog</IonTitle>
          </IonToolbar>
        </IonHeader>

        {
          console.log(state)
               /**
                *   Prendere i post e mostrarli come Cards.
                * 
                 */ 

        }
      </IonContent>
    </IonPage>
  );
};

export default Blog;