import { Component} from '@angular/core';
import{ ViewChild} from '@angular/core';
import{ElementRef} from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent{
  map:any;
  
  @ViewChild('map',{read: ElementRef, static: false}) mapRef: ElementRef;
  
  infoWindows: any = [];
  markers: any = [
    {
      title: "Farmacia Knop",
      latitude: "-33.5941644",
      longitude:"-70.7062331"
    },
    {
      title: "Farmacia para Todos",
      latitude: "-33.5952963",
      longitude:"-70.7065147"
    },
    {
      title: "Farmacia AhorroFarm",
      latitude: "-33.5974346",
      longitude:"-70.7034993"
    },
    {
      title: "Farmacia Pura Pharma",
      latitude: "-33.5941313",
      longitude:"-70.7069213"
    },
    {
      title: "Farmacia los Robles",
      latitude: "-33.5949705",
      longitude:"-70.7037638"
    },
    {
      title: "Farmacia Farmalym",
      latitude: "-33.5920705",
      longitude:"-70.7058828"
    },
    {
      title: "Sociedad Farmaceutica",
      latitude: "-33.5906539",
      longitude:"-70.7106839"
    },
    {
      title: "Sociedad Urgencia",
      latitude: "-33.5938517",
      longitude:"-70.7003536"
    }
  ];

  constructor(){}
   
  ionViewDidEnter(){
    this.showMap();
  }

  addMarkersToMap(markers){
    for(let marker of markers){
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }
  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div id="content">'+
                              '<h2 id="firstHeading" class="firstHeading">'+ marker.title + '</h2>'+
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitude: ' + marker.longitude + '</p>' +
                              '<a href="https://api.whatsapp.com/send?phone=56964817795&text=FarmaLocal!%20Consulta%20por%20nuestros%20productos.%F0%9F%91%8D"><ion-button id ="navegate"  > Contactanos </ion-button></a>'
                              '</div>';
  
  let InfoWindow = new google.maps.InfoWindow({
    content: infoWindowContent
  });

  marker.addListener('click', () =>{
    this.closeAllInfoWindows();
    InfoWindow.open(this.map, marker);
    
  

  });
  this.infoWindows.push(InfoWindow);
  }

  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(-33.5925939, -70.7046752);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }
}

