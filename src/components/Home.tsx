import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { play } from 'ionicons/icons';
import React, { useState } from 'react';
import { ReactDOM } from 'react';

import Player from '../components/Player'
import PlayerList from '../components/PlayerList'
import SetList from './SetList';


class Home extends React.Component<{ callback: any, changescreen: any}, { set: any }> {
  constructor(props: any) {
    super(props)
    this.callbackFunction = this.callbackFunction.bind(this)
    this.state = {
      set: {}
    }
  }

  callbackFunction(data: any) {
    
    this.setState({
      set: data
    })
    
    this.props.callback(data)
    
    
  
  }
  sleep(milliseconds : number) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  render() {

    return (
      <IonPage>
        <IonContent>
          <SetList callback={this.callbackFunction}/>
        </IonContent>
      </IonPage >
    );
  };
}

export default Home;
