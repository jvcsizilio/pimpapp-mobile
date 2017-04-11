import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { 
  GoogleMap, 
  GoogleMapsEvent, 
  LatLng,
  MarkerOptions,
  Marker 
} from '@ionic-native/google-maps';



@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
    map: GoogleMap;
 
    constructor(public navCtrl: NavController, public platform: Platform) {
        platform.ready().then(() => {
            this.loadMap();
        });
    }
 
    loadMap(){
 
        let location = new LatLng(-23.616786, -46.669331);
 
        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });
 
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
          let catador: LatLng = new LatLng(-23.616786, -46.669331);
          let coleta: LatLng = new LatLng(-23.618742, -46.667335);

          let markerColeta: MarkerOptions = {
            position: coleta,
            title: 'Coleta',
          };

          let markerCatador: MarkerOptions = {
            position: catador,
            title: 'Catador'
          };

          const mkCatador = this.map.addMarker(markerCatador)
            .then((marker: Marker) => {
                marker.showInfoWindow();
            });

            const mkColeta = this.map.addMarker(markerColeta)
            .then((marker: Marker) => {
                marker.showInfoWindow();
            });
        });
    }
}