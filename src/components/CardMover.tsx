import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, { Component } from "react";

import Player from "./Player";

class CardMover  extends Component<{players : any, playSet : any},{cards: any, truths: any, dares : any, current: number, currentType : string, choose : boolean, players:any, fems:any, males:any, currentPlayerName: string, currentPlayerGender: string, emptyPlayers : any}>{
    
    constructor(props: any){
        super(props)
        
        this.state= {
            cards: [],
            truths :[],
            dares :[],
            current: 0,
            currentType : "",
            choose : true,
            players: this.props.players,
            fems: [],
            males: [],
            currentPlayerName: "",
            currentPlayerGender: "",
            emptyPlayers: []
        }
        
    }
    componentDidMount(){
          
          

          //@ts-ignore
         
          
         
         
          
      
  }

  replaceText(text : string){
    
    
    text = text.replace("@a","Ben")
    text = text.replace("@f","Sarah")
    text = text.replace("@m","Maxi")
    return text
  }
  renderText(){
    
      if(this.props.playSet.length != 0){
        let content : string
        content = 'Keine ' + this.state.currentType +'s mehr übrig.' 
        //@ts-ignore
        this.props.playSet.taskList.forEach(task => {
          if(task.type == this.state.currentType){
            console.log(task.content.message)
            
            content = this.replaceText(task.content.message)
          
          }
          
        });
        return<div>{content}</div>

        
      }
    
    
      
    
  }
  remCard() {
   

    var males : any = []
    var fems : any = []

    //@ts-ignore
    this.props.players.forEach(element => {
      if(element.gender == "male"){
        males.push(element)
      }
      else{
        fems.push(element)
      }})
    this.setState({
      currentPlayerName : this.state.players[0].name,
      males : males,
      fems: fems
    })

    this.selectPlayer()
  }
  finishedPlayers(){
    this.setState({ choose: true, players: this.state.emptyPlayers },
      () => {this.remCard()})
  }
  selectPlayer() {
    var randInt = Math.floor(Math.random() * this.state.players.length);
    this.setState({ currentPlayerName: this.state.players[randInt].name, currentPlayerGender: this.state.players[randInt].gender })

  }
  renderChoice() {
    return (
      <IonCard>

        <IonCardContent >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IonGrid>
              <IonRow>
                <IonCol>

                  <IonButton style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} type="button" onClick={() => { this.setState({ currentType: "truth", choose: false }) }}>
                    Truth
                  </IonButton>
                </IonCol>

              </IonRow>
              <IonRow>
                <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {this.state.currentPlayerName}
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} type="button" onClick={() => { this.setState({ currentType: "dare", choose: false }) }}>
                    Dare
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>

        </IonCardContent>
      </IonCard>
    )
  }
  renderCard() {
    return (<div>
      {console.log(this.props.playSet)}

      <IonCard>
        <IonCardHeader>
          <div>{
            this.truthOrDareTitle()
          }</div>
        </IonCardHeader>

        <IonCardContent >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {this.renderText()}
          </div>

        </IonCardContent>
      </IonCard>

      <IonGrid id="grid">
        <IonRow>
          <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IonButton type="button" onClick={() => { this.remCard(); this.setState({ choose: true }) }}>

            </IonButton>
          </IonCol>
          <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IonButton type="button" onClick={() => { this.remCard(); this.setState({ choose: true }) }}>

            </IonButton>
          </IonCol>
          <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IonButton type="button" onClick={() => { this.remCard(); this.setState({ choose: true }) }}>

            </IonButton>
          </IonCol>
        </IonRow>

      </IonGrid>

    </div>)
  }
  truthOrDareTitle() {


    if (this.state.currentType == "dare") {
      return <div>
        <IonCardTitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Dare</IonCardTitle>
      </div>
    }
    else {
      return <div>
        <IonCardTitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Truth</IonCardTitle>
      </div>
    }



  }

  renderPlayerList() {
    return <div>
      <IonCard>
        <IonCardHeader>
        </IonCardHeader>

        <IonCardContent >
          <div>
            {this.state.emptyPlayers && this.state.emptyPlayers.map((player: any, index: number) => {
              return (
                <div>
                  <IonRow>
                    <IonCol size="3">
                      <IonItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <IonToggle onIonChange={e => this.swapGender(index)} />
                      </IonItem>
                    </IonCol>
                    <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}><IonInput value={player.name} placeholder={'Name'} onIonChange={e => this.setName(e.detail.value!, index)}></IonInput>
                    </IonCol>
                    <IonCol style={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}>
                      <IonButton type="button" onClick={() => this.delSelf(index)}>x   </IonButton>
                    </IonCol>
                  </IonRow>
                </div>
              )
            })}
            <IonRow>
              <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IonButton type="button" onClick={() => { this.addUser() }}>
                  +
                </IonButton>
              </IonCol>{ }
            </IonRow></div>

          <IonGrid id="grid">
            <IonRow>
              <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               
              </IonCol>
              <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IonButton type="button" onClick={() => { this.finishedPlayers() }}>

                </IonButton>
              </IonCol>
              <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                
              </IonCol>
            </IonRow>

          </IonGrid>

        </IonCardContent>
      </IonCard>
    </div>
  }
  addUser() {
    var array: any
    array = this.state.emptyPlayers
    array.push({
      gender: "male",
      name: ""
    })
    this.setState({ emptyPlayers: array })
  }

  delSelf(index: number): void {
    var array: any
    array = this.state.emptyPlayers
    array.splice(index, 1)
    this.setState({ emptyPlayers: array })
  }

  setName(name: string, index: number): void {
    var array: any
    array = this.state.emptyPlayers
    array[index].name = name
    this.setState({ emptyPlayers: array })
  }

  swapGender(index: number): void {
    var array: any
    array = this.state.emptyPlayers
    if (array[index].gender = "male") {
      array[index].gender = "female"
    }
    else {
      array[index].gender = "male"
    }
    this.setState({ emptyPlayers: array })
  }

  chooseOrPlay() {
    console.log(this.state.players.length)
    if (this.state.players.length <= 0) {
      return <div> {this.renderPlayerList()} </div>
    }
    else if (this.state.choose) {
      return <div>
        {this.renderChoice()}
      </div>
    }
    else {
      return <div>
        {this.renderCard()}
      </div>
    }
  }

  render() {
    return (<div>
      {this.chooseOrPlay()}
    </div>
    )
  }
}
export default CardMover
