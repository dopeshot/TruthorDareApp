import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonPage } from "@ionic/react";
import { person } from "ionicons/icons";
import React, { Component } from "react";

class Profile extends Component<{ changeScreen: any }, {}>{
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
            <IonCol style={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}><IonButton type ="button" onClick={() => {this.props.changeScreen("collection")}}>+ New</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonButton type="button" onClick={() => { }}>Collection</IonButton>
            <IonButton type="button" onClick={() => { }}>Collection</IonButton>
            <IonButton type="button" onClick={() => { }}>Collection</IonButton>
          </IonRow>
          <IonRow>
            <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>Your tasks</IonCol>
            <IonCol style={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}><IonButton type="button" onClick={() => { this.props.changeScreen("cardmaker") }}>+ New</IonButton></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  }
}
export default Profile