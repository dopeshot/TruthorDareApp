import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonInput } from "@ionic/react";
import React, {Component} from "react";
import Player from "./Player";



class PlayerList extends Component<{}, { playerCount: number, players : any }> {
    playerArray : Player[]
    playerCount : number
    constructor(){
        super(false);
        this.playerArray = [new Player({gender:'male',name:''}), new Player({gender:'male',name:''})]
        
        
        
        this.playerCount = 2
        this.state = {
            playerCount : 2,
            players : []
        }

    }

    componentDidMount(){
        console.log("hey")
        fetch('./players.json')
        .then(response => {console.log(response)
            return response.json()})
        .then(result => {

            console.log(result)
            //@ts-ignore
            const players = result.map(item => {
                
                return item;
            })
            this.setState({
                players: players
            })
        })
    }
    delSelf(index : number){
       
    }
    swapGender(index : number){

    }
    setName(name: string, index: number){

    }
    
    addUser(){
        this.playerArray.push(new Player({gender:'female',name:''}))
        this.playerCount = this.playerCount + 1
        this.setState({playerCount: this.playerCount})
    }
    //@ts-ignore
    render(){
        
        return(<div>
            { this.state.players && this.state.players.map((player : any,index : number) => {
                return (
                    <div>
                    <IonRow>
                        <IonCol size="3">
                            <IonItem style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                                <IonToggle onIonChange={e => this.swapGender(index)} />
                            </IonItem>
                        </IonCol>
                        <IonCol style={{display: 'flex', justifyContent:'left', alignItems:'left'}}><IonInput value={player.name} placeholder={'Name'} onIonChange={e =>this.setName(e.detail.value!,index)}></IonInput>
                        </IonCol>
                        <IonCol style={{display: 'flex', justifyContent:'right', alignItems:'right'}}>
                        <IonButton type ="button" onClick={() => this.delSelf(index)}>x   </IonButton>
                    </IonCol>
                    </IonRow>
                  </div>
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