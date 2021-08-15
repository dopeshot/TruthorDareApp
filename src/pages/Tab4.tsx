import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { person } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import Profile from '../components/Profile';
import { Component } from 'react';
import CardMaker from '../components/CardMaker';
import Collection from '../components/Collection';

class Tab4 extends Component<{},{currentscreen : string}>{
  constructor(){
    
    super(false)
    this.changeScreen = this.changeScreen.bind(this)
    this.state = ({
      currentscreen : "profile"
    })
  }

  changeScreen(screen : string){
    this.setState({
      currentscreen : screen
    })
  }
  screen(){
    if(this.state.currentscreen == "profile"){
      return <Profile changeScreen = {this.changeScreen}/>
    }
    if(this.state.currentscreen == "cardmaker"){
      return <CardMaker changeScreen = {this.changeScreen}/>
    }
    if(this.state.currentscreen == "collection"){
      return <Collection changeScreen = {this.changeScreen}/>
    }
    if(this.state.currentscreen == "login"){
      return 
    }
  }

  render(){
    return (<div>{this.screen()}</div>

      );
  }
  
};

export default Tab4;
