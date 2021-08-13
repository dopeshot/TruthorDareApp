import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent } from "@ionic/react";
import React, {Component} from "react";
import Card from "./Card";

class CardMover extends Component{
    constructor(){
        super(false)
    }

    render(){
        return( <IonContent>
            <Card />
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