import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { play } from 'ionicons/icons';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Player from '../components/Player'
import PlayerList from '../components/PlayerList'
import './Tab4.css';


const Tab4: React.FC = () => {


  
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
    <IonGrid id="grid">
     <PlayerList/>
      
    </IonGrid>
  </IonContent>
    </IonPage>
  );
};

export default Tab4;
