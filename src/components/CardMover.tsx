import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, { Component } from "react";

import Player from "./Player";

class CardMover  extends Component<{players : any, playSet : any},{cards: any, truths: any, dares : any, current: number, currentType : string, choose : boolean, players:any,  currentPlayerName: string, currentPlayerGender: string, emptyPlayers : any, continue : boolean, currentContent: string}>{
  current : number
  played : any
  skipped: any
  rest: any
    constructor(props: any){
      
        super(props)
        
        this.current = 0
        this.rest = this.props.playSet.taskList
        
        
        this.played = []
        this.skipped = []
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
            continue: false,
            currentContent: ""

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

  replaceText(text : string, players:{ atA : any, atF: any, atM: any}){
    
    text = text.replace("@a",players.atA.name)
    text = text.replace("@f",players.atF.name)
    text = text.replace("@m",players.atM.name)
    return text
  }
  
  genderToGender(atForm : string){
    switch(atForm) {
      case "@ca":
        return this.state.currentPlayerGender
        break;
      case "@cm":
        return "male"
        break;
        case "@cf":
          return "female"
          break;
    } 
  }
  nextCard(type: string){
    
    

    let males = []
    
    let females : any = []

    //@ts-ignore
    this.onlyFullPlayers().forEach(element => {
      if(element.gender == "female"){
        females.push(element)
      }else{
        males.push(element)
      }
      
    });

    

    let minFem
    let minMale
    this.shuffle(this.rest)
    let minPlayers = this.rest[0].content.anyoneCount + this.rest[0].content.maleCount + this.rest[0].content.femaleCount + 1
    if(this.state.currentPlayerGender == "female"){minFem = this.rest[0].content.femaleCount+1}else{minFem = this.rest[0].content.femaleCount}
    if(this.state.currentPlayerGender == "male"){minMale = this.rest[0].content.maleCount+1}else{minMale = this.rest[0].content.maleCount}
    
    
    
    
    if(this.genderToGender(this.rest[0].content.currentPlayerGender) == this.state.currentPlayerGender && this.onlyFullPlayers().length>=minPlayers && females.length >= minFem && males.length >= minMale ){
      

      console.log("Played: " + this.rest[0].content.message)
      this.played.push(this.rest[0])
      let current = this.rest[0]
      this.rest.splice(0,1)
      
      
      this.setState({currentContent: current.content.message, currentType : type, choose: false }) 
    }else{
      
      console.log("Skipped: " + this.rest[0].content.message)
      this.skipped.push(this.rest[0])
      this.rest.splice(0,1)
      this.nextCard(type)
    }

  }


  

  onlyFullPlayers() : any{
    let fullPlayerCount = this.state.players
    
    fullPlayerCount.forEach((player: any,index: any) => {
      if(player.name == ""){
      fullPlayerCount.splice(index,1)
      }
    });
    
  return fullPlayerCount
}

  selectPlayer(type : string) {

    
    
    var randInt = Math.floor(Math.random() * this.onlyFullPlayers().length);

    this.setState({ currentPlayerName: this.onlyFullPlayers()[randInt].name, currentPlayerGender: this.onlyFullPlayers()[randInt].gender },() => {
      this.nextCard(type)
       })

  }

  renderChoice() {
    return (
      <IonCard>

        <IonCardContent >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IonGrid>
              <IonRow>
                <IonCol>

                  <IonButton style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} type="button" onClick={() => { this.selectPlayer("truth");  }}>
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
                  <IonButton style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} type="button" onClick={() => { this.selectPlayer("dare"); }}>
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
      

      <IonCard>
        <IonCardHeader>
          <div>{
            this.truthOrDareTitle()
          }</div>
        </IonCardHeader>

        <IonCardContent >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {this.state.currentContent}
          </div>

        </IonCardContent>
      </IonCard>

      <IonGrid id="grid">
        <IonRow>
          <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IonButton type="button" onClick={() => { this.setState({ choose: true }) }}>

            </IonButton>
          </IonCol>
          <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IonButton type="button" onClick={() => {  this.setState({ choose: true }) }}>

            </IonButton>
          </IonCol>
          <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IonButton type="button" onClick={() => {  this.setState({ choose: true }) }}>

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
    this.setState({ players: array })
    this.forceUpdate()
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
