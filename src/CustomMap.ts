// instructions to every other class on how they can be an argument to addMarker
interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  // good solution
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}

  // okay solution
  // cons: need to add each class (like User and Company below) when there's more 
//   addMarker(mappable: User | Company): void {

//     // location is the only property I can refer to. only commonality between User and Company
//     mappable.location

//     new google.maps.Marker({
//       map: this.googleMap,
//       position: {
//         lat: mappable.location.lat,
//         lng: mappable.location.lng
//       }
//     });
//   }
// }