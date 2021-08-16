import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonPage } from "@ionic/react";
import { person } from "ionicons/icons";
import React, { Component } from "react";

class Profile extends Component<{ changeScreen: any, userSets:any, editColl : any, cardMaker : any, user: any }, {}>{
  constructor(props: any) {
    super(props)
  }

  render() {
    return <IonPage>

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
              <IonButton expand="block" fill="outline" shape="round" onClick={() => { this.props.changeScreen("regislogin") }}>Zurück</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} size="3">
              <IonIcon icon={person} />
            </IonCol>
            <IonCol>
              Username
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>12</IonCol>
            <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</IonCol>
            <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>5</IonCol>
          </IonRow>
          <IonRow>
            <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Tasks</IonCol>
            <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Sets</IonCol>
            <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Upvotes</IonCol>
          </IonRow>
          <IonRow>
            <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Your sets</IonCol>
            <IonCol style={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}><IonButton type ="button" onClick={() => {this.props.editColl({
        name: "Collection Name",
        taskList :
        [
        ],
        description : "Beschreibung",
        creator : {name : "Hottie2000"},
        likes: 0,
        dislikes: 0,
        truthCount: 0,
        daresCount: 0
    })}}>+ New</IonButton></IonCol>
          </IonRow>
          <IonRow>
          { this.props.userSets && this.props.userSets.map((set : any,index : number) => {
                return (
                    <div>
                    <IonButton type="button" onClick={() => {this.props.editColl(set,index) }}>{set.name}</IonButton>
                  </div>
                )
              }) }
          </IonRow>
          <IonRow>
            <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Your tasks</IonCol>
            <IonCol style={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}><IonButton type="button" onClick={() => { this.props.cardMaker(-1,"profile") }}>+ New</IonButton></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  }
}
export default Profile