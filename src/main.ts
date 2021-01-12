import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAGsFmpwvTEuC9UhwFdw_APUTXEeT_H_To",
  authDomain: "colordarknessdata.firebaseapp.com",
  databaseURL: "https://colordarknessdata-default-rtdb.firebaseio.com",
  projectId: "colordarknessdata",
  storageBucket: "colordarknessdata.appspot.com",
  messagingSenderId: "1060338265518",
  appId: "1:1060338265518:web:ad8266f41d9f32d487ec3f",
  measurementId: "G-10T0D76C93"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});