import { IonRow, IonCol, IonItem, IonToggle, IonButton } from "@ionic/react";
import React, {Component} from "react";
import Player from "./Player";



class PlayerList extends Component {
    playerArray : Player[]
    playerCount : number
    constructor(){
        super(false);
        this.playerArray = [new Player({gender:'male',name:'',list: this}), new Player({gender:'male',name:'',list: this})]
        
        console.log(this)
        
        this.playerCount = 2
        this.state = {
            playerCount : 2
        }

    }
    delSelf(index : number, parent : PlayerList){
        console.log(this)
        parent.playerArray.splice(index,1)
        parent.playerCount = parent.playerArray.length
        parent.setState({playerCount: parent.playerCount})

    }
    addUser(){
        this.playerArray.push(new Player({gender:'male',name:'',list: this}))
        this.playerCount = this.playerCount + 1
        this.setState({playerCount: this.playerCount})
    }
    render(){
        return(<div>
            { this.playerArray && this.playerArray.map((player,index) => {
                return (
                        <Player delSelf = {this.delSelf} parent = {this}/>
         
                    
                )
              }) }
              <IonRow>


        <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
         
        <IonButton type ="button" onClick={() => {this.addUser()}}>
          +
        </IonButton>
       
        </IonCol>
      </IonRow></div>
        )
    }

}
export default PlayerList