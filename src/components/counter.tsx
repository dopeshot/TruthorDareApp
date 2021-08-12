import { IonButton } from "@ionic/react";
import React, { Component } from "react";


export default class Counter extends Component {

    state = {
        count: 0,
            }
    render(){
        return(
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <IonButton>Increment</IonButton>
            </React.Fragment>
            
        ) 
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
 
}
