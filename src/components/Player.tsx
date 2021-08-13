
import { IonRow, IonCol, IonItem, IonToggle, IonInput } from "@ionic/react";
import React, {Component} from "react";

class Player extends Component {
    
    gender: string
    name : string
    constructor(){
        
        super(false);
        this.gender = 'male'
        this.name = ""

        this.state = {
            gender: 'male',
            update: true
        }

        
    }
    swapGender(player: Player, ) : void {
        console.log(player.name)
        if(player.gender == "male"){
            player.gender = "female"
            player.setState({gender: 'female'}) 
        }
        else{
            player.gender = "male"
            player.setState({gender: 'male'}) 
        }
    }
    setName(name: string){
        
        this.name = name
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
        <IonCol style={{display: 'flex', justifyContent:'left', alignItems:'left'}}><IonInput value={this.name} placeholder="Name" onIonChange={e =>this.setName(e.detail.value!)}></IonInput>{this.name}</IonCol>
      </IonRow>
      </div>
        )
    }

}
export default Player