import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { play } from 'ionicons/icons';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Player from '../components/Player'
import './Tab4.css';


const Tab4: React.FC = () => {

  function addUser(){
    console.log("yay")
  }

  function swapGender(player: any, male: boolean){

    if(player.gender=="male"){
      player.gender = "female"
    }
    else{
      player.gender = "male"
    }
  }
  document.querySelectorAll("grid")
  const players = [{
    key: 1,
    text: "",
    gender: "male"
  }, {
    key: 2,
    text: "",
    gender: "male"
  }, {
    key: 3,
    text: "",
    gender: "male"
  }]
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
    <IonGrid id="grid">
      { players && players.map(player => {
        return <Player/>
      }) }
      <IonRow>
        <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
         
        <IonButton type ="button" onClick={addUser}>
          +
        </IonButton>
       
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
    </IonPage>
  );
};

export default Tab4;
