import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import React from 'react';
import axios from 'axios';

const Blog: React.FC = () => {

    let post=[];

    useIonViewDidEnter(() => {
        axios.get("http://localhost:3000/api/posts")
        .then(response => response.data)
        .then((data) => {

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