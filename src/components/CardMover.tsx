import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, { Component } from "react";

import Player from "./Player";

class CardMover  extends Component<{players : any, playSet : any},{cards: any, truths: any, dares : any, current: number, currentType : string, choose : boolean, players:any,  currentPlayerName: string, currentPlayerGender: string, emptyPlayers : any, continue : boolean}>{
  current : number
    constructor(props: any){
      
        super(props)
        
        this.current = 0

        this.state= {
            cards: [],
            truths :[],
            dares :[],
            current: 0,
            currentType : "",
            choose : true,
            players: this.props.players,
            currentPlayerName: "",
            currentPlayerGender: "",
            emptyPlayers: [],
            continue: false
        }
        
    }
    
    componentDidMount(){
          
          

    
  }
  shuffle(array : any) {
    var currentIndex = array.length,  randomIndex;
  
    
    while (currentIndex != 0) {
  
     
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
     
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  replaceText(text : string){
    
    let array = this.state.players
    var males: any = [] 
    var females: any = [] 
    //@ts-ignore
    array.forEach(element => {
      if(element.gender == "male"){
        males.push(element)
      }
      else{
        females.push(element)
      }
    });
    
    let atA = this.shuffle(array)[0]
    let atM = this.shuffle(males)[0]
    let atF = this.shuffle(females)[0]
    
    text = text.replace("@a",atA.name)
    text = text.replace("@f",atF.name)
    text = text.replace("@m",atM.name)
    return text
  }
  renderText(){
    
      if(this.props.playSet.length != 0){
        let content : string
        content = 'Keine ' + this.state.currentType +'s mehr übrig.' 
        //@ts-ignore
        this.props.playSet.taskList.forEach((task, index) => {
          if(task.type == this.state.currentType){
            console.log(task.content.message)
            
            content = this.replaceText(task.content.message)
            this.current = index
          }
          
        });
        return<div>{content}</div>

        
      }
    
    
      
    
  }
  remCard() {
   
    this.props.playSet.taskList.splice(this.current,1)

    //@ts-ignore
    
    this.setState({
      currentPlayerName : this.state.players[0].name
      
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
      {console.log(this.state.currentPlayerName)}

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
            {this.props.players && this.props.players.map((player: any, index: number) => {
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
                      <IonButton type="button" disabled = {this.state.players.length == 1} onClick={() => this.delSelf(index)}>x   </IonButton>
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
                <IonButton type="button"  disabled = {this.state.players[0].name.length == 0} onClick={() => { this.setState({continue : true}) }}>

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
    array = this.state.players
    array.push({
      gender: "male",
      name: ""
    })
    
    
  }

  delSelf(index: number): void {
    var array: any
    array = this.state.players
    array.splice(index, 1)
    this.setState({ players: array })
  }

  setName(name: string, index: number): void {
    var array: any
    array = this.state.players
    array[index].name = name
    this.props.players[index].name = name
    this.setState({ players: array })
  }

  swapGender(index: number): void {
    var array: any
    array = this.state.players
    if (array[index].gender = "male") {
      array[index].gender = "female"
    }
    else {
      array[index].gender = "male"
    }
    this.setState({ players: array })
  }

  chooseOrPlay() {
    
    if (this.state.players[0].name == "" || !this.state.continue) {
      
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
