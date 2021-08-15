import { IonRow, IonCol, IonItem, IonToggle, IonButton, IonInput } from "@ionic/react";
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

    delSelf(index: number) {
        var array: any
        array = this.state.sets
        array.splice(index, 1)
        this.setState({ sets: array })
    }

    safe() {

        if (this.state.sets.length != 0) {
            this.props.callback(this.state.sets)
        }
    }
    //@ts-ignore
    render() {

        return (<div>
            {this.state.sets && this.state.sets.map((set: any, index: number) => {
                return (
                    <div>
                        <IonRow>
                                <IonItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p>{index}</p>
                                </IonItem>
                                <IonButton fill="clear"> {set.name}</IonButton>
                        </IonRow>
                    </div>
                )
            })}
        </div>
        )
    }
}
export default SetList
