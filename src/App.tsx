import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import {
  IonApp,
  IonAvatar,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, home, man, people, person, play, square, star, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { profile } from 'console';
import Counter from './components/counter';

class App extends React.Component<{},{players: any, user : any, playSet : any}> {

  constructor(props: any){

  
    super(props)
    this.callbackFunction = this.callbackFunction.bind(this)
    this.setPlaySet = this.setPlaySet.bind(this)
    this.state={
      players: [{name: "", gender : "male"},{name : "",gender : "male"}],
      user : null,
      playSet : null
    }
  }

  componentDidMount(){
    fetch(`https://truth-or-dare-community.herokuapp.com/api/set/611c1d4c1c20a66b5cdad7bf/tasks`)
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.setState({
                  playSet : result
                })
            })
  }

  callbackFunction(data : any){
    
    this.setState({
      players : data
    })
  }
  setPlaySet(set : any){
    this.setState({
      playSet : set
    },
    () => {  }  )
    

  }
  render(){
    return <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 playSet = {this.setPlaySet}/>
          </Route>
          <Counter/>
          <Route exact path="/tab2">
            <Tab2 players = {this.state.players} playSet = {this.state.playSet}/>
          </Route>
          <Route path="/tab3">
            <Tab3 callback = {this.callbackFunction} players = {this.state.players}/>
          </Route>
          <Route exact path="/tab4">
            <Tab4 playSet = {this.setPlaySet}  />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={play} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={people} />
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={person} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  }
  
}

export default App;
