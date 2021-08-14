import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, {Component} from "react";
import Card from "./Card";
import Player from "./Player";

class CardMover extends Component{
    cardArray : Card[]

    constructor(){
        super(false)
        this.cardArray = [
            new Card({dare: true, text : "Wieviel Geld müsste *XY dir geben dass ihr heute Nacht sex habt?",
            player: new Player({gender: 'male', name: 'Ben'})
            })
        ]
        this.state= {
            side: 'choosing'
        }
        
    }

    render(){
        return( <IonContent>
            <IonCard>
          <IonCardHeader>
            <IonCardTitle style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Truth/Dare</IonCardTitle>
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