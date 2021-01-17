<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-label>
          <div v-bind:style="{background:this.RGB}" class="box color_sample"></div>
        </ion-label>
        <ion-segment value="dark" @ion-change="segmentChanged()">
          <ion-segment-button value="dark">
            <ion-label>Dark</ion-label>
          </ion-segment-button>
          <ion-segment-button value="light">
            <ion-label>Light</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-card>
      <ion-button routerLink="/">
        Menu
        <ion-icon :icon="arrowBackOutline"></ion-icon>
      </ion-button>
      <ion-button v-on:click="nextColor()">
        Next
        <ion-icon :icon="arrowForwardOutline" />
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonSegment, IonIcon, IonButton } from '@ionic/vue';
import { arrowForwardOutline, arrowBackOutline } from 'ionicons/icons';
import { db } from "../main";
import { useRoute } from 'vue-router';



export default  {
  name: 'Tab2',
  data() {
    return {
      R: 0,
      G: 0,
      B: 0,
      RGB: '',
      isDark: true,
      userRef: db.collection("datas")
    }
  },
  methods: {
    setRandomColor() {
      this.R = Math.floor(Math.random() * 255);
      this.G = Math.floor(Math.random() * 255);
      this.B = Math.floor(Math.random() * 255);
      this.RGB = "RGB(" + this.R + "," + this.G + "," + this.B + ")";
      return this.RGB
    },
    nextColor() {
      //alert('3');
      console.log(`R:${this.R}, G:${this.G}, B:${this.B}, isDark:${this.isDark}`);
      this.userRef.add({
        R: this.R,
        G: this.G,
        B: this.B,
        isDark: this.isDark
      }).catch(err => console.log(err));
      this.setRandomColor()
    },
    segmentChanged() {
      this.isDark = !this.isDark;
      console.log(`${this.isDark}`);
    }
  },
  mounted: function() {
    this.setRandomColor();
    //this.userRef.get().then(d => {
    //  d.forEach(e => {
    //    const data = e.data();
    //    console.log(`R:${data.R}, G:${data.G}, B:${data.B}, isDark:${data.isDark}`);
    //  })
    //})
    //this.userRef.add({
    //  R: 0,
    //  G: 0,
    //  B: 0,
    //  isDark: true
    //}).catch(err => console.log(err));
  },
  setup() {
    return {
      arrowForwardOutline,
      arrowBackOutline
    }
  },
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonSegment, IonIcon, IonButton }
}
</script>