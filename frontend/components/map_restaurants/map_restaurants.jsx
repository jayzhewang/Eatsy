import React from 'react';

class Map extends React.Component {
  componentDidUpdate(){
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      mapTypeId: 'roadmap',
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false
    };
    var restaurants = this.props.restaurants;
    var map = new google.maps.Map(mapDOMNode, mapOptions);

    var markers = [], infoWindowContent = [];
    restaurants.forEach(res=>{

        markers.push([res.name, res.get_lng_lat[0], res.get_lng_lat[1]]);
        infoWindowContent.push([
          `<div className="map-marker-info">` +
          `<h3>${res.name}</h3>` +
          `<h2>${res.rating}</h2>` +
          `<h2>${res.price_range}</h2>` +
          `<h2>${res.phone_number}</h2>` +
          `</div>`]);

    });

    var infoWindow = new google.maps.InfoWindow(), marker, i;

    const bounds = new google.maps.LatLngBounds();

    for(var i = 0; i < markers.length; i++ ) {
      var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
      bounds.extend(position);
      marker = new google.maps.Marker({
          position: position,
          map: map,
          title: markers[i][0]
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
              infoWindow.setContent(infoWindowContent[i][0]);
              infoWindow.open(map, marker);
          }
      })(marker, i));

      map.fitBounds(bounds);
    }

    // var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
    //  this.setZoom(11);
    //  google.maps.event.removeListener(boundsListener);
    // });
  }

  render(){
    if(this.props.restaurants === undefined){
      return (
        <div>
          Loading...
        </div>
      );
    } else {
      return (
        <div className="map-restaurants" ref="map">
        </div>
      );
    }
  }
}

export default Map;
