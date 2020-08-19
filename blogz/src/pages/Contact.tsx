import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonGrid,IonCol, IonIcon, IonLabel, IonItem } from '@ionic/react';
import React from 'react';

import {logoTwitter,logoInstagram,logoGithub,logoPlaystation } from 'ionicons/icons';

interface AppPage {
    url: string;
    icon: string;
    title: string;
  }

const contacts: AppPage[] = [
    {
        title: 'Twitter',
        url: 'https://twitter.com/mr_zekel',
        icon: logoTwitter,
    },
    {
        title: 'Instagram',
        url: 'https://www.instagram.com/thezekel/',
        icon: logoInstagram
    },
    {
        title: 'GitHub',
        url: 'https://github.com/Zekel97',
        icon: logoGithub
    },
    {
        title: 'PlayStation',
        url: 'https://my.playstation.com/profile/thezekel97',
        icon: logoPlaystation
    }
]

const Contact: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
            {contacts.map((appPage, index) => {
            return (
                <IonCol key={index}>
                    <a href={appPage.url} target="_blank" rel="noopener noreferrer">
                        <IonItem>
                            <IonIcon slot="start" ios={appPage.icon} md={appPage.icon} />
                            <IonLabel>{appPage.title}</IonLabel>
                        </IonItem>
                    </a>
                </IonCol>
            );
            })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Contact;