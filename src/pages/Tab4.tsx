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

class Tab4 extends Component<{},{currentscreen : string, userSets : any, setIndex : number, collData : any, lastScreen : string}>{
  constructor(){
    
    super(false)
    this.changeScreen = this.changeScreen.bind(this)
    this.editColl = this.editColl.bind(this)
    this.cardMaker = this.cardMaker.bind(this)
    this.pushToColl = this.pushToColl.bind(this)
    this.state = ({
      currentscreen : "profile",
      userSets : [],
      setIndex: -1,
      lastScreen : "profile",
      collData: {
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
    }
    })
  }
  componentDidMount() {

    fetch('./userSets.json')
        .then(response => {
            return response.json()
        })
        .then(result => {

            //@ts-ignore
            const sets = result.map(item => {
                return item;
            })

            this.setState({
                userSets: sets
            })
        })
}
  

  editColl(data : any,index : number){
    this.setState({
      setIndex : index,
      collData : data
    },
    () => {  this.setState({
      currentscreen : "collection"
    }) } )
  }
  cardMaker(index : number, lastScreen : string){
    console.log(index)
    this.setState({
      setIndex: index,
      lastScreen : lastScreen
    },
    () => {  this.setState({
      currentscreen : "cardmaker"
    }) }  
  );
  }
  addTaskToSet(index : number, task : any){
    let array = this.state.userSets
    array[index].taskList.push(task)
    this.setState({
      userSets: array
    })
  }
  addSet(set : any){
    let array = this.state.userSets
    array.push(set)
    this.setState({
      userSets : array
    }
  )}

  pushToColl(index : number, data : any){
    let obj = this.state.userSets
    obj[index].taskList.push({language: "deutsch",
    type: data.type,
    content: {message:data.text,currentPlayerGender : data.gender},
    author : {name: "Balkonkind"},
    likes : 0,
    dislikes: 0,
    status: "joa"})

  }


  changeScreen(screen : string){
    this.setState({
      currentscreen : screen
    })
  }
  screen(){
    if(this.state.currentscreen == "profile"){
      console.log(this.state.userSets)
      return <Profile changeScreen = {this.changeScreen} userSets = {this.state.userSets} editColl = {this.editColl} cardMaker = {this.cardMaker} user = {null}/>
    }
    if(this.state.currentscreen == "cardmaker"){
      return <CardMaker changeScreen = {this.changeScreen} setIndex = {this.state.setIndex} pushToColl = {this.pushToColl} lastScreen ={this.state.lastScreen} />
    }
    if(this.state.currentscreen == "regislogin"){
      return <RegisLogin changeScreen = {this.changeScreen}/>
    }
    if(this.state.currentscreen == "collection"){
      return <Collection changeScreen = {this.changeScreen} writeable = {true} data = {this.state.collData} cardMaker = {this.cardMaker} index = {this.state.setIndex}/>
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
