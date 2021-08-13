
import { IonRow, IonCol, IonItem, IonToggle } from "@ionic/react";
import React, {Component} from "react";

class Player extends Component {
    
    gender: String 
    constructor(){
        
        super(false);
        this.gender = 'male'
        
    }
    swapGender(player: Player, ) : void {
        console.log(player.gender)
        if(player.gender == "male"){
            player.gender = "female"
        }
        else{
            player.gender = "male"
        }
    }
    render(){
        return (
        <div>
            <IonRow>
        <IonCol size="3">
          <IonItem style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <IonToggle onIonChange={e => this.swapGender(this)} />
          </IonItem>
        </IonCol>
        <IonCol style={{display: 'flex', justifyContent:'left', alignItems:'left'}}>{this.gender}</IonCol>
      </IonRow>
      </div>
        )
    }

}
export default Player