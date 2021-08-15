import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonPage, IonCardSubtitle, IonTextarea, IonCheckbox } from "@ionic/react";
import { person, text } from "ionicons/icons";
import React, {Component} from "react";

class CardMaker extends Component<{changeScreen : any},{text : string, gendered : boolean, gender: boolean}>{
    constructor(props: any){
        super(props)
        this.state = {
            text : "",
            gendered: false,
            gender: false
        }
    }
    setText(text : string){
        this.setState({
            text : text
        })
    }
    setChecked(gendered : boolean){
        this.setState({
            gendered : gendered
        })
    }
    swapGender(gender : boolean){
        this.setState({
            gender : gender
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
                    <IonCol>
                        <IonButton type ="button" onClick={() => {this.props.changeScreen("profile")}}>Pfeil</IonButton>                
                    </IonCol>
                    <IonCol style={{display: 'flex', justifyContent:'center', alignItems:'center'}}><IonToggle style={{display: 'flex', justifyContent:'center', alignItems:'center'}}/>{console.log(this.state.text)}</IonCol>
                    <IonCol>
                        
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                    <IonTextarea value={this.state.text}  placeholder = "Task" onIonChange={e => this.setText(e.detail.value!)}></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonGrid>
      </IonCardContent>
   </IonCard>
   <IonGrid>
       <IonRow>
           <IonCol size = "1.5"> 
           <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <IonItem  >
                    <IonCheckbox   checked={this.state.gendered} onIonChange={e => this.setChecked(e.detail.checked)} />
                </IonItem>
                </div>
           </IonCol>
           <IonCol>
           <IonToggle checked={this.state.gender} disabled = {!this.state.gendered} onIonChange={e => this.swapGender(e.detail.checked)} />
           </IonCol>
       </IonRow>
       <IonRow>
           Hier könnte eine Legende stehen
       </IonRow>
   </IonGrid>
   
 </IonContent>
   </IonPage>
        </div>
    }
}
export default CardMaker