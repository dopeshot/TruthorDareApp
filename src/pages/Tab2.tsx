import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import React from 'react';
import './Tab2.css';
import CardMover from '../components/CardMover';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';


class Tab2 extends React.Component<{players : any, playSet : any},{players: any}> {
  constructor(props : any){
    super(props)
    this.state = {
      players : this.props.players,
      
    }

    
    
  }
  firstStart(){
    if(this.props.players.length == 0){
      return <div>Set players first</div>
    }
    else{
      return (
        <IonPage>
          <IonContent>
          
            <CardMover players = {this.props.players} playSet = {this.props.playSet}/>
            </IonContent>
        </IonPage>
      );
    }
  }
  render(){
    return (
     <div>{this.firstStart()}</div>
    );
  }
  
};

export default Tab2;
