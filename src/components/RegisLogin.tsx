import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonPage } from "@ionic/react";
import React, { Component } from "react";
import Profile from "./Profile";

class RegisLogin extends Component <{changeScreen : any},{}>{
    constructor(props : any){
        super(props)
    }

    render() {
        return <IonPage>
            <IonContent>
                <IonRow>
                    <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                        <p>Mach deine Freunde fertig!</p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                        <p>Erstelle Tasks und Sets.</p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <IonButton expand="block" fill="outline" shape="round" size="large" onClick={() => {this.props.changeScreen("registration")}}>Kostenlos registrieren</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <IonButton expand="block" fill="outline" shape="round" size="large" onClick={() => {this.props.changeScreen("logingoogle")}}>Weiter mit Google</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <IonButton expand="block" fill="outline" shape="round" onClick={() => {this.props.changeScreen("login")}}>Anmelden</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    }
}
export default RegisLogin
