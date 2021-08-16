import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { person } from 'ionicons/icons';

import './Tab3.css';
import Profile from '../components/Profile';
import { Component } from 'react';
import CardMaker from '../components/CardMaker';
import Collection from '../components/Collection';
import RegisLogin from '../components/RegisLogin';
import Registration from '../components/Registration';
import LoginGoogle from '../components/LoginGoogle';
import Login from '../components/Login';

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
    if(this.state.currentscreen == "regislogin"){
      return <RegisLogin changeScreen = {this.changeScreen}/>
    }
    if(this.state.currentscreen == "collection"){
      return <Collection changeScreen = {this.changeScreen} writeable = {true} data = {{
        name: "Collection Name",
        taskList :
        [
        ],
        description : "Beschreibung",
        creator : {name : "Hottie2000"},
        likes: 0,
        dislikes: 0,
        truthCount: 0,
        daresCount: 0
    }}/>
    }
    if(this.state.currentscreen == "cardmaker"){
      return <CardMaker changeScreen = {this.changeScreen}/>
    }
    if(this.state.currentscreen == "registration"){
      return <Registration changeScreen = {this.changeScreen}/>
    }
    if(this.state.currentscreen == "logingoogle"){
      return <LoginGoogle changeScreen = {this.changeScreen}/>
    }
    if(this.state.currentscreen == "login"){
      return <Login changeScreen = {this.changeScreen}/>
    }
  }

  render(){
    return (<div>{this.screen()}</div>

      );
  }
  
};

export default Tab4;
