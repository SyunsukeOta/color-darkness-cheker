<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-title class="bigbig">Color Darkness<br>Cheker</ion-title>
        <section>
          <ion-button size="large" routerLink="tab2">Classify Darkness</ion-button>
        </section>
      </ion-card>
      <ion-card>
        <ion-title class="bigbig">{{this.dataCount}}</ion-title>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard } from '@ionic/vue';
import { db } from "../main";

export default  {
  name: 'Tab1',
  data() {
    return {
      dataCount: 0,
      userRef: db.collection("datas")
    }
  },
  mounted: function() {
    this.userRef.get().then(d => {
      this.dataCount = 0;
      d.forEach(e => {
        this.dataCount++;
        console.log(e.data());
      })
    })
  },
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonCard }
}
</script>