import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { play } from 'ionicons/icons';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Player from '../components/Player'
import PlayerList from '../components/PlayerList'
import SetList from './SetList';


class Home extends React.Component<{ callback: any, changescreen: any}, { sets: any }> {
  constructor(props: any) {
    super(props)
    this.callbackFunction = this.callbackFunction.bind(this)
    this.state = {
      sets: []
    }
  }

  callbackFunction(data: any) {
    this.setState({
      sets: data
    })

    this.props.callback(this.state.sets)
  }

  render() {

    return (
      <IonPage>
        <IonHeader>
        </IonHeader>
        <IonContent>
          <IonGrid id="grid">

            <SetList callback={this.callbackFunction} />
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
}

export default Home;
