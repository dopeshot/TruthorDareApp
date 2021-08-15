import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import './Tab2.css';
import CardMover from '../components/CardMover';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';


class Tab2 extends React.Component<{players : any},{players: any}> {
  constructor(props : any){
    super(props)
    this.state = {
      players : this.props.players,
      
    }

    
    
  }
  render(){
    return (
      <IonPage>
        
        
          <CardMover players = {this.props.players}/>
      </IonPage>
    );
  }
  
};

export default Tab2;
