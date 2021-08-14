import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import CardMover from '../components/CardMover';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';


const Tab2: React.FC = () => {
  return (
    <IonPage>
        <CardMover/>
    </IonPage>
  );
};

export default Tab2;
