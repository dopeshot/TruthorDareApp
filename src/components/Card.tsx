import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React, {Component} from "react";
import '../CSS/Card.css';

class Card extends Component {
    constructor (){
        super(true);
        this.state= {
            side: 'choosing'
        }
    }

    render () {
        return (
            
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

          
        )
    }
}
export default Card