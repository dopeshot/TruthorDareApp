import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { ReactDOM } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';


const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    <IonGrid>

      <IonRow>
        <IonCol size="3">
          <IonButton>Button</IonButton>
        </IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
    </IonPage>
  );
};

export default Tab4;
