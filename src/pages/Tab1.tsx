import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { person } from 'ionicons/icons';

import './Tab3.css';
import Profile from '../components/Profile';
import { Component } from 'react';
import CardMaker from '../components/CardMaker';
import RegisLogin from '../components/RegisLogin';
import Registration from '../components/Registration';
import LoginGoogle from '../components/LoginGoogle';
import Login from '../components/Login';
import Home from '../components/Home';

class Tab1 extends Component<{},{currentscreen : string}>{
  constructor(){
    
    super(false)
    this.changeScreen = this.changeScreen.bind(this)
    this.state = ({
      currentscreen : "home"
    })
  }

  changeScreen(screen : string){
    this.setState({
      currentscreen : screen
    })
  }
  
  screen(){
    if(this.state.currentscreen == "home"){
      return <Home changescreen = {this.changeScreen} callback/>
    }
  }

  render(){
    return (<div>{this.screen()}</div>

      );
  }
  
};

export default Tab1;
