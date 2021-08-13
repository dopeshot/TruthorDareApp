
import { IonRow, IonCol, IonItem, IonToggle, IonInput, IonButton } from "@ionic/react";
import React, {Component} from "react";
import PlayerList from "./PlayerList";


interface Props {
    delSelf: void;
  }
class Player extends React.Component {
    
    gender: string
    name : string
    list : PlayerList

    props: any
    constructor(data : {gender : string, name : string, list : PlayerList}){
        
        super(false);
        this.gender = data.gender
        this.name = data.name
        this.list = data.list
        
        
        this.state = {
            gender: 'male',
            update: true,
            parent: this.list
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
            <IonCol style={{display: 'flex', justifyContent:'left', alignItems:'left'}}><IonInput value={this.name} placeholder="Name" onIonChange={e =>this.setName(e.detail.value!)}></IonInput>
            </IonCol>
            <IonCol style={{display: 'flex', justifyContent:'right', alignItems:'right'}}>
            <IonButton type ="button" onClick={() => this.props.delSelf(0, this.props.parent)}>x   </IonButton>
        </IonCol>
        </IonRow>
      </div>
        )
    }

}
export default Player
