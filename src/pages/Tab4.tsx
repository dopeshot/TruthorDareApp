import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { play } from 'ionicons/icons';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Player from '../components/Player'
import PlayerList from '../components/PlayerList'
import './Tab4.css';


class Tab4 extends React.Component<{callback: any},{players : any}> {
  constructor(props: any){
    super(props)
    this.state ={
      players : []
    }
    
  }

  callbackFunction(data : any){
    this.setState({
      players : data
    })
  }
  render()
  {
   
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
    <IonGrid id="grid">
      
     <PlayerList callback = {this.callbackFunction}/>
      {this.props.callback(this.state.players)}
    </IonGrid>
  </IonContent>
    </IonPage>
  );
};
}

export default Tab4;
