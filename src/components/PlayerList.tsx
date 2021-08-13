import { IonRow, IonCol, IonItem, IonToggle } from "@ionic/react";
import React, {Component} from "react";
import Player from "./Player";

class PlayerList extends Component {
    player : Player
    playerArray : Player[]
    constructor(){
        super(false);
        this.player = new Player()
        this.playerArray = []

    }
    render(){
        return(
            <div></div>
        )
    }

}