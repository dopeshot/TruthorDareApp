import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonPage, IonCardSubtitle, IonTextarea, IonCheckbox } from "@ionic/react";
import { person, text } from "ionicons/icons";
import React, {Component} from "react";

class CardMaker extends Component<{},{text : string}>{
    constructor(props: any){
        super(props)
        this.state = {
            text : ""
        }
    }
    setText(text : string){
        this.setState({
            text : text
        })
    }
    render(){
        return <div>
            <IonPage>
     
     <IonContent>
         
   <IonCard>

    <IonCardContent>
            <IonGrid>
                <IonRow>
                    <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}><IonToggle style={{display: 'flex', justifyContent:'center', alignItems:'center'}}/>{console.log(this.state.text)}</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                    <IonTextarea value={this.state.text}  placeholder = "Task" onIonChange={e => this.setText(e.detail.value!)}></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonGrid>
      </IonCardContent>
   </IonCard>
   <IonItem>
   
   </IonItem>
 </IonContent>
   </IonPage>
        </div>
    }
}
export default CardMaker