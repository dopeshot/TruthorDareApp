import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, {Component} from "react";

import Player from "./Player";

class CardMover extends Component<{players : any, playSet : any},{cards: any, truths: any, dares : any, current: number, dare : boolean, choose : boolean, players:any, fems:any, males:any, currentPlayerName: string, currentPlayerGender: string}>{
    
    constructor(props: any){
        super(props)
        
        this.state= {
            cards: [],
            truths :[],
            dares :[],
            current: 0,
            dare : true,
            choose : true,
            players: this.props.players,
            fems: [],
            males: [],
            currentPlayerName: "",
            currentPlayerGender: ""
        }
        
    }
    componentDidMount(){
          var truths : any = []
          var dares : any = []
          var males : any = []
          var fems : any = []

          //@ts-ignore
          this.props.playSet.taskList.forEach(element => {
            if(element.type == "dare"){
              dares.push(element)
            }
            else{
              truths.push(element)
            }
          });
          //@ts-ignore
          this.props.players.forEach(element => {
            if(element.gender == "male"){
              males.push(element)
            }
            else{
              fems.push(element)
            }})
          this.setState({
            dares: dares,
            truths: truths,
            currentPlayerName : this.props.players[0].name,
            males : males,
            fems: fems
          })
         
          
          
      
  }

  replaceText(text : string){

    
    text = text.replace("@a","Ben")
    text = text.replace("@f","Sarah")
    text = text.replace("@m","Maxi")
    return text
  }
  renderText(){
    if(this.state.dare){
      if(this.state.dares.length != 0){
        return <div>
          {this.replaceText(this.state.dares[this.state.current].content.message)}
        </div>
        }
    }
    else{
      if(this.state.truths.length != 0){
        return <div>
          {this.replaceText(this.state.truths[this.state.current].content.message)}
        </div>
        }
    }
  }
  remCard(){
    if(!this.state.dare){
    var array : any
    array = this.state.truths
    array.splice(this.state.current,1)
    this.setState({truths: array})
    }
    else{
      var array : any
    array = this.state.dares
    array.splice(this.state.current,1)
    this.setState({dares: array})
    
    }
    this.selectPlayer()
  }
  selectPlayer(){
    var randInt = Math.floor(Math.random() * this.props.players.length);
    this.setState({currentPlayerName: this.props.players[randInt].name, currentPlayerGender: this.props.players[randInt].gender})
    
  }
  renderChoice(){
    return(
    <IonCard>
          
          <IonCardContent >
              <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <IonGrid>
              <IonRow>
                <IonCol>
              
                <IonButton style={{display: 'flex', justifyContent:'center', alignItems:'center'}} type ="button" onClick={() => {this.setState({dare: false, choose : false})}}>
                  Truth
                </IonButton>
                </IonCol>
               
              </IonRow>
              <IonRow>
              <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                {this.state.currentPlayerName}
              </IonCol>
              </IonRow>
              <IonRow>
              <IonCol>
                <IonButton style={{display: 'flex', justifyContent:'center', alignItems:'center'}} type ="button" onClick={() => {this.setState({dare: true, choose : false})}}>
                  Dare
                </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
            </div>
            
      </IonCardContent>
        </IonCard>
    )
  }
  renderCard(){
    return (<div>
    
            <IonCard>
          <IonCardHeader>
            <div>{
              this.truthOrDareTitle()
            }</div>
          </IonCardHeader>

          <IonCardContent >
              <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            {this.renderText()}
            </div>
            
      </IonCardContent>
        </IonCard>

            <IonGrid id="grid">
          <IonRow>
            <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
              <IonButton type ="button" onClick={() => {this.remCard(); this.setState({choose: true})}}>
    
              </IonButton>
            </IonCol>
            <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
             <IonButton type ="button" onClick={() => {this.remCard(); this.setState({choose: true})}}>
                
              </IonButton>
            </IonCol>
            <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <IonButton type ="button" onClick={() => {this.remCard(); this.setState({choose: true})}}>
                
            </IonButton>
            </IonCol>
          </IonRow>
          
        </IonGrid>
        
        </div>)
  }
  truthOrDareTitle(){

    
    if(this.state.dare){
      return<div>
      <IonCardTitle style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Dare</IonCardTitle>
    </div>
    }
    else{
      return<div>
      <IonCardTitle style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Truth</IonCardTitle>
    </div>
    }
  
   
   
  }
  chooseOrPlay(){

    if(this.state.choose){
      return <div>
        {this.renderChoice()}
      </div>
    }
    else{
      return <div>
        {this.renderCard()}
      </div>
    }
  }
    render(){
        return( <div>
          {this.chooseOrPlay()}
        </div>
        )
    }
}
export default CardMover