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
      <ion-button v-on:click="nextColor()">
        Next
        <ion-icon :icon="arrowForwardOutline" />
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonSegment, IonIcon } from '@ionic/vue';
import { arrowForwardOutline } from 'ionicons/icons';


export default  {
  name: 'Tab2',
  data() {
    return {
      R: 0,
      G: 0,
      B: 0,
      RGB: '',
      isDark: true
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
      this.setRandomColor()
    },
    segmentChanged() {
      this.isDark = !this.isDark;
      console.log(`${this.isDark}`);
    }
  },
  created: function() {
    this.setRandomColor()
  },
  setup() {
    return {
      arrowForwardOutline
    }
  },
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonSegment, IonIcon }
}
</script>