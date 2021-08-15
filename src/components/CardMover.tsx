import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, {Component} from "react";

import Player from "./Player";

class CardMover extends Component<{},{cards: any, truths: any, dares : any, current: number, dare : boolean, choose : boolean}>{
    
    constructor(){
        super(false)
        
        this.state= {
            cards: [],
            truths :[],
            dares :[],
            current: 0,
            dare : true,
            choose : true
        }
        
    }
    componentDidMount(){
        console.log("HEy")
      fetch('./collection.json')
      .then(response => {
          return response.json()})
      .then(result => {

          
          //@ts-ignore
          const cards = result.map(item => {
              
              return item;
          })
          this.setState({
              cards: cards
          })
          var truths : any = []
          var dares : any = []

          //@ts-ignore
          this.state.cards.forEach(element => {
            if(element.dare){
              dares.push(element)
            }
            else{
              truths.push(element)
            }
          });
          this.setState({
            dares: dares,
            truths: truths
          })

          
      })
  }
  renderText(){
    if(this.state.dare){
      if(this.state.dares.length != 0){
        return <div>
          {this.state.dares[this.state.current].text}
        </div>
        }
    }
    else{
      if(this.state.truths.length != 0){
        return <div>
          {this.state.truths[this.state.current].text}
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
  }
  renderChoice(){
    return(
    <IonCard>
          
          <IonCardContent >
              <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <IonGrid>
              <IonRow>
                <IonButton type ="button" onClick={() => {this.setState({dare: false, choose : false})
                }}>

                </IonButton>
              </IonRow>
              <IonRow>
                <IonButton type ="button" onClick={() => {this.setState({dare: true, choose : false})}}>
                  
                </IonButton>
              </IonRow>
            </IonGrid>
            </div>
            
      </IonCardContent>
        </IonCard>
    )
  }
  renderCard(){
    return (
    <IonContent>
            

            <IonGrid id="grid">
          <IonRow>
            <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
              <IonButton type ="button" onClick={() => {this.remCard(); this.renderChoice()}}>
    
              </IonButton>
            </IonCol>
            <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
             <IonButton type ="button" onClick={() => {this.remCard(); this.renderChoice()}}>
                
              </IonButton>
            </IonCol>
            <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <IonButton type ="button" onClick={() => {this.remCard(); this.renderChoice()}}>
                
            </IonButton>
            </IonCol>
          </IonRow>
          
        </IonGrid>
        </IonContent>
        )
  }
  truthOrDareTitle(){

    if(this.state.cards.length != 0){
    if(this.state.cards[this.state.current].dare){
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
   return<div></div>
   
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