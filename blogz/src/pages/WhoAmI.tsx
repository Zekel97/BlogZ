import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonGrid,IonCol,IonRow } from '@ionic/react';
import React from 'react';
import "./WhoAmI.css";

const WhoAmI: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Who Am I</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">WhoAmI</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
            <IonRow>
                <IonCol id="paragraph">Mi chiamo Andreas, nato nel lontano 1997 nella soleggiata Brasov, Romania. 
                    Introdotto al mondo dell'informatica fin da piccolo, scoprii la passione per la programmazione 
                    intorno al 2010 con lo scripting PAWN per un server di San Andreas MultiPlayer.
                </IonCol>
                <IonCol></IonCol>
                <IonCol></IonCol>
            </IonRow>

            <IonRow>
                <IonCol></IonCol>
                <IonCol id="paragraph">Frequentando l' <b>Istituto Tecnico Industriale "G. & M. Montani di Fermo"</b> ho avuto modo
                    di toccare diversi linguaggi di programmazione, diverse tecnologie e diventare un <b>Jack of All Trades</b>.
                    Nel tempo libero ho approfondito le mie conoscenze in svariati ambiti come <b>Cyber Security e Pentesting</b>,
                    <b>VideoGame Design e Development</b> e sviluppo <b>Full Stack</b>.
                    </IonCol>
                <IonCol></IonCol>
            </IonRow>

            <IonRow>
                <IonCol></IonCol>
                <IonCol></IonCol>
                <IonCol id="paragraph"> Allo stesso tempo ho iniziato a mettere piede nel mondo della musica registrando con lo pseudonimo di <a href="https://open.spotify.com/artist/6xfdpEmEsZSJ2ZUxXO92zX?si=rtbcGe3zQtq9f46PEH6DSg" target="_blank" rel="noopener noreferrer"><b>TheZekel</b></a>,
                    e ho potuto imparare l'intero processo partendo dalla scrittura, alla registrazione, alla creazione dell'immagine e marketing. </IonCol>
            </IonRow>

        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default WhoAmI;