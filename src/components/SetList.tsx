import { IonRow, IonList, IonItem, IonInfiniteScrollContent, IonButton, IonInfiniteScroll, IonSearchbar } from "@ionic/react";
import React, { Component } from "react";
import Player from "./Player";

class SetList extends Component<{ callback: any }, { setCount: number, sets: any, searchText : string, searchSets : any }> {

    constructor(props: any) {
        super(props);

        this.state = {
            setCount: 2,
            sets: [],
            searchText: "",
            searchSets : []
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



        this.setState({
            searchSets : []
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
                                <IonButton type = "button" fill="clear" onClick={() => {this.props.callback(set); console.log(set)}}> {set.name}</IonButton>
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
                                <IonButton type = "button" fill="clear" onClick={() => {this.props.callback(set); console.log(set)}}> {set.name}</IonButton>
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
