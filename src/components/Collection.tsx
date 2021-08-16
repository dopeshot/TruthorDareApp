import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonGrid, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonPage, IonCardSubtitle, IonTextarea, IonCheckbox, IonSearchbar } from "@ionic/react";
import { analyticsSharp, person, text } from "ionicons/icons";
import React, {Component} from "react";

class Collection extends Component<{changeScreen : any,writeable: boolean, data : any},{name: string, taskList: any, description: string, creator : any, likes: number, dislikes: number, truthCount: number, daresCount: number,searchText: string, writeable: boolean }>{
    constructor(props: any){
        super(props)
        this.state = {
            name: "collecjio",
            taskList: [],
            description : "",
            creator: {name: "name"},
            likes: 0,
            dislikes: 0,
            truthCount: 0,
            daresCount: 0,
            searchText: "",
            writeable : this.props.writeable
    }
    this.setState({
        name: this.props.data.name,
            taskList: this.props.data.taskList,
            description : this.props.data.description,
            creator: this.props.data.creator,
            likes: this.props.data.likes,
            dislikes: this.props.data.dislikes,
            truthCount: this.props.data.truthCount,
            daresCount: this.props.data.daresCount
            
    })

    
    }
    

    setSearchText(text : string){
        this.setState({
            searchText: text
        })
    }
    mark(type: string){
        if(type == "truth"){
            return <div>?</div>
        }
        else{
            return <div>!</div>
        }
    }
    delSelf(index: number){
        var array : any
        array = this.state.taskList
        array.splice(index,1)
        this.setState({taskList: array})
    }

    writeableOrNot(){
        if(this.state.writeable){
            return <div>
            <IonPage>
     <IonContent>
            <IonGrid>
                <IonRow>
                    <IonButton type = "button" onClick={() => this.props.changeScreen("profile")}>
                        Pfeil
                    </IonButton>
                </IonRow>
                <IonRow>
                    <IonCol size = "3">
                        <IonButton>Picture</IonButton>
                    </IonCol>
                    <IonCol>
                        <p>Name:{this.state.name}</p><p>created by{this.state.creator.name}</p><p>{this.state.truthCount} Truths</p><p>{this.state.daresCount} Dares</p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <div >
                        <IonButton >
                            Play
                        </IonButton>
                    </div>
                </IonRow>
                <IonRow>
                <IonSearchbar value={this.state.searchText} onIonChange={e => this.setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
                </IonRow>
                { this.state.taskList && this.state.taskList.map((task : any,index : number) => {
                    return<div>
                        <IonRow>
                            <IonCol>
                                {task.likes-task.dislikes}
                            </IonCol>
                            <IonCol>
                                {this.mark(task.type)}
                            </IonCol>
                            <IonCol>
                                {task.content.message}
                            </IonCol>
                            <IonCol>
                                <IonButton type ="button" onClick={() => this.delSelf(index)}>
                                    X
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </div>}) }
            </IonGrid>
            </IonContent>
      </IonPage>
      </div>
        }
        else{
            return <div>
            <IonPage>
     <IonContent>
            <IonGrid>
                <IonRow>
                    <IonButton>
                        Pfeil
                    </IonButton>
                </IonRow>
                <IonRow>
                    <IonCol size = "3">
                        <IonButton>Picture</IonButton>
                    </IonCol>
                    <IonCol>
                        <p>Name:{this.props.data.name}</p><p>created by {this.props.data.creator.name}</p><p>{this.props.data.truthCount} Truths</p><p>{this.props.data.daresCount} Dares</p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <div >
                        <IonButton >
                            Play
                        </IonButton>
                        <IonButton >
                            Save
                        </IonButton>
                    </div>
                </IonRow>
                <IonRow>
                <IonSearchbar value={this.props.data.searchText} onIonChange={e => this.setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
                </IonRow>
                { this.props.data.taskList && this.props.data.taskList.map((task : any,index : number) => {
                    return<div>
                        <IonRow>
                            <IonCol>
                                {task.likes-task.dislikes}
                            </IonCol>
                            <IonCol>
                                {this.mark(task.type)}
                            </IonCol>
                            <IonCol>
                                {task.content.message}
                            </IonCol>
                        </IonRow>
                    </div>}) }
            </IonGrid>
            </IonContent>
      </IonPage>
      </div>
        }
    }
    render(){
        return <div>
            {this.writeableOrNot()}
      </div>
        
    }
}
export default Collection