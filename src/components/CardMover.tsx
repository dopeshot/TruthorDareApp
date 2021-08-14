import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, {Component} from "react";

import Player from "./Player";

class CardMover extends Component<{},{cards: any, current: number}>{
    
    constructor(){
        super(false)
        
        this.state= {
            cards: [],
            current: 0
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
      })
  }
  truthOrDare(){
    console.log(this.state.cards)

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
    render(){
        return( <IonContent>
            <IonCard>
          <IonCardHeader>
            <div>{
              this.truthOrDare()
            }</div>
           
          </IonCardHeader>

          <IonCardContent >
              <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            Frage
            </div>
            
      </IonCardContent>
        </IonCard>

            <IonGrid id="grid">
          <IonRow>
            <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
              <IonButton>
    
              </IonButton>
            </IonCol>
            <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
             <IonButton>
                
              </IonButton>
            </IonCol>
            <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <IonButton>
                
            </IonButton>
            </IonCol>
          </IonRow>
          
        </IonGrid>
        </IonContent>
        )
    }
}
export default CardMover