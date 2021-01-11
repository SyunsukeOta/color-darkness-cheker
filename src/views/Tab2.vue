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
          <div v-bind:style="{background:setRandomColor()}" class="box color_sample"></div>
        </ion-label>
        <ion-segment value="all">
          <ion-segment-button value="all">
            <ion-label>Dark</ion-label>
          </ion-segment-button>
          <ion-segment-button value="favorites">
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

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonSegment, IonIcon } from '@ionic/vue';
import { arrowForwardOutline } from 'ionicons/icons';


export default  {
  name: 'Tab2',
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev);
    },
    setRandomColor() {
      const R = Math.floor(Math.random() * 255);
      const G = Math.floor(Math.random() * 255);
      const B = Math.floor(Math.random() * 255);
      const RGB = "RGB(" + R + "," + G + "," + B + ")";
      return RGB
    },
    nextColor() {
      alert('3');
      
    }
  },
  setup() {
    return {
      arrowForwardOutline
    }
  },
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonSegment, IonIcon }
}
</script>