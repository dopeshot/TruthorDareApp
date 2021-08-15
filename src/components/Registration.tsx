import { IonRow, IonCol, IonItem, IonList, IonButton, IonItemDivider, IonContent, IonInput, IonLabel, IonCardHeader, IonCardTitle, IonIcon, IonPage } from "@ionic/react";
import React, { Component } from "react";
import Profile from "./Profile";

class RegisLogin extends Component<{ changeScreen: any }, { username: string, password: string, passwordRe: string, mail: string, mailRe: string }>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: "",
            password: "",
            passwordRe: "",
            mail: "",
            mailRe: ""
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
    setPasswordRe(text: string) {
        this.setState({
            passwordRe: text
        })
    }
    setMail(text: string) {
        this.setState({
            mail: text
        })
    }
    setMailRe(text: string) {
        this.setState({
            mailRe: text
        })
    }

    render() {
        return <IonPage>
            <IonContent>
                <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                    <IonButton expand="block" fill="outline" shape="round" onClick={() => { this.props.changeScreen("regislogin") }}>Zurück</IonButton>
                </IonCol>
                <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                    <p>Hilf uns, deine Registrierung abzuschließen!</p>
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
                    <IonItem>
                        <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                            <IonLabel text-wrap >Passwort wiederholen</IonLabel>
                        </IonCol>
                        <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                            <IonInput type="password" value={this.state.passwordRe} placeholder="Enter Input" onIonChange={e => this.setPasswordRe(e.detail.value!)}></IonInput>
                        </IonCol>
                    </IonItem>
                    <IonItem>
                        <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                            <IonLabel position="fixed">E-Mail</IonLabel>
                        </IonCol>
                        <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                            <IonInput value={this.state.mail} placeholder="Enter Input" onIonChange={e => this.setMail(e.detail.value!)}></IonInput>
                        </IonCol>
                    </IonItem>
                    <IonItem>
                        <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                            <IonLabel text-wrap>E-Mail wiederholen</IonLabel>
                        </IonCol>
                        <IonCol style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                            <IonInput value={this.state.mailRe} placeholder="Enter Input" onIonChange={e => this.setMailRe(e.detail.value!)}></IonInput>
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
