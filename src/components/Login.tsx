import { IonRow, IonCol, IonItem, IonList, IonButton, IonItemDivider, IonContent, IonInput, IonLabel, IonCardHeader, IonCardTitle, IonIcon, IonPage } from "@ionic/react";
import React, { Component } from "react";
import Profile from "./Profile";

class RegisLogin extends Component<{ changeScreen: any }, { username: string, password: string }>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    setUsername(text: string) {
        this.setState({
            username: text
        })
    }
    setPassword(text: string) {
        this.setState({
            password: text
        })
    }

    render() {
        return <IonPage>
            <IonContent>
                <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                    <IonButton expand="block" fill="outline" shape="round" onClick={() => { this.props.changeScreen("regislogin") }}>Zurück</IonButton>
                </IonCol>
                <IonList>
                    <IonItem>
                        <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                            <IonLabel position="fixed">Nutzername</IonLabel>
                        </IonCol>
                        <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                            <IonInput value={this.state.username} placeholder="Enter Input" onIonChange={e => this.setUsername(e.detail.value!)}></IonInput>
                        </IonCol>
                    </IonItem>
                    <IonItem>
                        <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                            <IonLabel position="fixed">Passwort</IonLabel>
                        </IonCol>
                        <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                            <IonInput type="password" value={this.state.password} placeholder="Enter Input" onIonChange={e => this.setPassword(e.detail.value!)}></IonInput>
                        </IonCol>
                    </IonItem>
                </IonList>
                <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                    <IonButton expand="block" fill="outline" shape="round" size="large" onClick={() => { this.props.changeScreen("registration") }}>Daten abschicken</IonButton>
                </IonCol>
            </IonContent>
        </IonPage>
    }
}
export default RegisLogin
