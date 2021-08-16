import { IonRow, IonList, IonItem, IonInfiniteScrollContent, IonButton, IonInfiniteScroll } from "@ionic/react";
import React, { Component } from "react";
import Player from "./Player";

class SetList extends Component<{ callback: any }, { setCount: number, sets: any }> {

    constructor(props: any) {
        super(props);

        this.state = {
            setCount: 2,
            sets: []
        }
    }

    componentDidMount() {

        fetch('./sets.json')
            .then(response => {
                return response.json()
            })
            .then(result => {

                //@ts-ignore
                const sets = result.map(item => {
                    return item;
                })

                this.setState({
                    sets: sets
                })
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
            <IonInfiniteScroll threshold="100px" id="infinite-scroll">
                            <IonInfiniteScrollContent
                                loading-spinner="bubbles"
                                loading-text="Loading more data...">
                            </IonInfiniteScrollContent>
                        </IonInfiniteScroll>
        </div>
        )
    }
}
export default SetList
