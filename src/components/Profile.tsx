import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonPage } from "@ionic/react";
import { person } from "ionicons/icons";
import React, {Component} from "react";

class Profile extends Component{
    constructor(){
        super(false)
    }

    render(){
        return <IonPage>
     
        <IonContent>
      <IonGrid>
        <IonRow>
          
        </IonRow>
       <IonRow>
         <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}} size = "3">
         <IonIcon  icon={person} />
         </IonCol>
         <IonCol>
           Username
         </IonCol>
       </IonRow>
       <IonRow>
         <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>12</IonCol>
         <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>2</IonCol>
         <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>5</IonCol>
       </IonRow>
       <IonRow>
         <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Tasks</IonCol>
         <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Sets</IonCol>
         <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Upvotes</IonCol>
       </IonRow>
       <IonRow>
         <IonCol style={{display: 'flex', justifyContent:'left', alignItems:'left'}}>Your sets</IonCol>
         <IonCol style={{display: 'flex', justifyContent:'right', alignItems:'right'}}><IonButton type ="button" onClick={() => {}}>+ New</IonButton></IonCol>
       </IonRow>
       <IonRow>
         <IonButton type ="button" onClick={() => {}}>Collection</IonButton>
         <IonButton type ="button" onClick={() => {}}>Collection</IonButton>
         <IonButton type ="button" onClick={() => {}}>Collection</IonButton>
       </IonRow>
       <IonRow>
       <IonCol style={{display: 'flex', justifyContent:'left', alignItems:'left'}}>Your tasks</IonCol>
         <IonCol style={{display: 'flex', justifyContent:'right', alignItems:'right'}}><IonButton type ="button" onClick={() => {}}>+ New</IonButton></IonCol>
       </IonRow>
      </IonGrid>
    </IonContent>
      </IonPage>
    }
}
export default Profile