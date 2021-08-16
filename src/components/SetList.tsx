import { IonRow, IonList, IonItem, IonInfiniteScrollContent, IonButton, IonInfiniteScroll } from "@ionic/react";
import React, { Component } from "react";
import Player from "./Player";
import InfiniteScroll from "react-infinite-scroll-component"

class SetList extends Component<{ callback: any }, { setCount: number, sets: any, items: any }> {

    constructor(props: any) {
        super(props);

        this.state = {
            setCount: 2,
            sets: [],
            items: Array.from({ length: 20 })
        }
    }


    j = 5;
/* 
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
    }  */

     fetchMoreData = () => {

        fetch('./sets.json')
            .then(response => {
                return response.json()
            })
            .then(result => {

                //@ts-ignore
                const sets = result.map(item => {
                    return item;
                })
            })
            
        setTimeout(() => {
            this.setState({
                sets: this.state.sets.concat(Array.from({ length: 20 }))
            });
        }, 1500);
    }; 

    //@ts-ignore
    render() {
        return (<div>
            <InfiniteScroll
                dataLength={this.state.sets.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}>
                    
            {this.state.sets && this.state.sets.map((set: any, index: number) => {
                    return (
                <div>
                    <IonRow>
                        <IonItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p>{index}</p>
                        </IonItem>
                        <IonButton type="button" fill="clear" onClick={() => { this.props.callback(set); console.log(set) }}> {set.name}</IonButton>
                    </IonRow>
                </div>
                )})}
            </InfiniteScroll>
            {/* <IonRow>
                <IonItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p>{index}</p>
                </IonItem>
                <IonButton type="button" fill="clear" onClick={() => { this.props.callback(set); console.log(set) }}> {set.name}</IonButton>
            </IonRow> */}
        </div>
        )
    }
}

export default SetList
