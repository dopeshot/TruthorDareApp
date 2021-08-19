import { IonRow, IonList, IonItem, IonInfiniteScrollContent, IonButton, IonInfiniteScroll, IonSearchbar } from "@ionic/react";
import React, { Component } from "react";
import Player from "./Player";

class SetList extends Component<{ callback: any }, { setCount: number, sets: any, searchText : string, searchSets : any, searchTasks : any }> {

    constructor(props: any) {
        super(props);

        this.state = {
            setCount: 2,
            sets: [],
            searchText: "",
            searchSets : [],
            searchTasks : []
        }
    }

    componentDidMount() {

        fetch('https://truth-or-dare-community.herokuapp.com/api/set')
            .then(response => {
                return response.json()
            })
            .then(result => {
                console.log(result)

                //@ts-ignore
                const sets = result.map(item => {
                    return item;
                })

                this.setState({
                    sets: sets
                })
            })
    }
    setSearchText(text: string){
        this.setState({
            searchText: text
        },
        () => {this.fetchSearch(text)} )
    }
    fetchSearch(searchText : string){
        if(searchText.length >= 3){
        
        fetch(`https://truth-or-dare-community.herokuapp.com/api/search/${searchText}`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            console.log(result)
            
            this.setState({
                searchSets : result.sets.items,
                searchTasks : result.tasks.items

            })
        })

    }
        
    }

    fetchSet(id : string){

        fetch(`https://truth-or-dare-community.herokuapp.com/api/set/${id}/tasks`)
            .then(response => {
                return response.json()
            })
            .then(result => {
                console.log(result)
                
                this.props.callback(result)
            })
            
    }


    
    //@ts-ignore
    render() {

        return (<div>
            {this.state.sets && this.state.sets.map((set: any, index: number) => {
                return (
                    <div>
                        <IonList>
                        <IonRow>
                                <IonItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p>{index}</p>
                                </IonItem>
                                <IonButton type = "button" fill="clear" onClick={() => {this.fetchSet(set._id)}}> {set.name}</IonButton>
                        </IonRow>
                        </IonList>
                    </div>
                )
            })}
            <IonSearchbar value={this.state.searchText} placeholder = {"Search"} onIonChange={e => this.setSearchText(e.detail.value!)}></IonSearchbar>
            {this.state.searchSets && this.state.searchSets.map((set: any, index: number) => {
                return (
                    <div>
                        <IonList>
                        <IonRow>
                                <IonItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p>{index}</p>
                                </IonItem>
                                <IonButton type = "button" fill="clear" onClick={() => {this.fetchSet(set._id)}}> {set.name}</IonButton>
                        </IonRow>
                        </IonList>
                    </div>
                    
                )
            })}
            {this.state.searchTasks && this.state.searchTasks.map((task: any, index: number) => {
                return (
                    <div>
                        <IonList>
                        <IonRow>
                                <IonItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p>{index}</p>
                                </IonItem>
                                <IonButton type = "button" fill="clear" onClick={() => {}}> {task.content.message}</IonButton>
                        </IonRow>
                        </IonList>
                    </div>
                    
                )
            })}
        </div>
        )
    }
}
export default SetList
