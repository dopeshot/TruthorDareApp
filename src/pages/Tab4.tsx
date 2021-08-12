import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';


const Tab4: React.FC = () => {
  const [checked, setChecked] = useState(false);
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
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <IonItem>
            <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
          </IonItem>
          </div>
        </IonCol>
        <IonCol style={{display: 'flex', justifyContent:'left', alignItems:'left'}}>ion-col</IonCol>
      </IonRow>
      <IonRow>
        <IonCol>

        </IonCol>
        <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
         
        <IonButton>
          +
        </IonButton>
       
        </IonCol>
        <IonCol>

        </IonCol>
       
      </IonRow>
    </IonGrid>
  </IonContent>
    </IonPage>
  );
};

export default Tab4;
