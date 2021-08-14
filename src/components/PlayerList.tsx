import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonInput } from "@ionic/react";
import React, {Component} from "react";
import Player from "./Player";





class PlayerList extends Component<{callback: any}, { playerCount: number, players : any }> {
    
   
    constructor(props: any){
        super(props);
        
        
        
        
        
        this.state = {
            playerCount : 2,
            players : []
        }

    }

    componentDidMount(){
        
        fetch('./players.json')
        .then(response => {
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
        var array : any
        array = this.state.players
        array.splice(index,1)
        this.setState({players: array})
    }
    swapGender(index : number){

    }
    setName(name: string, index: number){
        var array : any
        array = this.state.players
        array[index].name = name
        this.setState({players: array})
    }
    
    addUser(){
        var array : any
        array = this.state.players
        array.push({gender: "male",
                    name: ""})
        this.setState({players: array})
        this.setState({playerCount: this.state.playerCount +1})
    }
    safe(){
        if(this.state.players.length != 0){
        this.props.callback(this.state.players)
        }
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
       
        </IonCol>{this.safe()}
      </IonRow></div>
        )
    }

}
export default PlayerList


