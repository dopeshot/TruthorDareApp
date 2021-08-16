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
import Collection from '../components/Collection';

class Tab1 extends Component<{},{currentscreen : string, savedSet :any, currentSet : any}>{
  constructor(){
    
    super(false)
    this.changeScreen = this.changeScreen.bind(this)
    this.showSet = this.showSet.bind(this)
    this.state = ({
      currentscreen : "home",
      savedSet  : null,
      currentSet : null
    })
  }

  changeScreen(screen : string){
   

    this.setState({
      currentscreen : screen
    })
  }
  showSet(data: any) {
    
    this.setState(
      {
        currentSet : data
      },
      () => {  this.setState({
        currentscreen : "collection"
      }) }  
    );
    
    

  }
  

  screen(){
    if(this.state.currentscreen == "home"){
      return <Home changescreen = {this.changeScreen} callback = {this.showSet}/>
    }
    if(this.state.currentscreen == "collection"){
      console.log(this.state.currentSet)
      return <Collection  changeScreen = {this.changeScreen} writeable = {false} data = {this.state.currentSet} cardMaker={null} index = {-1}/>
    }
  }

  render(){
    return (<div>{this.screen()}</div>

      );
  }
  
};

export default Tab1;
