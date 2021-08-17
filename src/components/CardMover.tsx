import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, { Component } from "react";

import Player from "./Player";

class CardMover extends Component<{ players: any, playSet: any }, { cards: any, truths: any, dares: any, current: number, dare: boolean, choose: boolean, players: any, currentPlayerName: string, currentPlayerGender: string, emptyPlayers: any }>{

  constructor(props: any) {
    super(props)

    this.state = {
      cards: [],
      truths: [],
      dares: [],
      current: 0,
      dare: true,
      choose: true,
      players: this.props.players,
      currentPlayerName: "",
      currentPlayerGender: "",
      emptyPlayers: []
    }

  }
  componentDidMount() {
    var truths: any = []
    var dares: any = []

    //@ts-ignore
    this.props.playSet.taskList.forEach(element => {
      if (element.type == "dare") {
        dares.push(element)
      }
      else {
        truths.push(element)
      }
    });
    this.setState({
      dares: dares,
      truths: truths,
      currentPlayerName: "fg"
    })

    fetch('./players.json')
      .then(response => {
        return response.json()
      })
      .then(result => {


        //@ts-ignore
        const emPlayers = result.map(item => {

          return item;
        })
        this.setState({
          emptyPlayers: emPlayers
        })
      })
  }

  renderText() {
    if (this.state.dare) {
      if (this.state.dares.length != 0) {
        return <div>
          {this.state.dares[this.state.current].content.message}
        </div>
      }
    }
    else {
      if (this.state.truths.length != 0) {
        return <div>
          {this.state.truths[this.state.current].content.message}
        </div>
      }
    }
  }
  remCard() {
    if (!this.state.dare) {
      var array: any
      array = this.state.truths
      array.splice(this.state.current, 1)
      this.setState({ truths: array })
    }
    else {
      var array: any
      array = this.state.dares
      array.splice(this.state.current, 1)
      this.setState({ dares: array })

    }
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

                  <IonButton style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} type="button" onClick={() => { this.setState({ dare: false, choose: false }) }}>
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
                  <IonButton style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} type="button" onClick={() => { this.setState({ dare: true, choose: false }) }}>
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


    if (this.state.dare) {
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
                <IonButton type="button" onClick={() => { this.remCard(); this.setState({ choose: true }) }}>

                </IonButton>
              </IonCol>
              <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IonButton type="button" onClick={() => { this.finishedPlayers() }}>

                </IonButton>
              </IonCol>
              <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IonButton type="button" onClick={() => { this.remCard(); this.setState({ choose: true }) }}>

                </IonButton>
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
