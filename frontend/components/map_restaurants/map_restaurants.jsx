import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Map extends React.Component {
  componentDidUpdate(){
    var restaurants = this.props.restaurants;
    if(restaurants && restaurants.length > 0){
      const mapDOMNode = this.refs.map;
      const mapOptions = {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      };
      var map = new google.maps.Map(mapDOMNode, mapOptions);
      var markers = [], infoWindowContent = [];
      restaurants.forEach(res=>{
        if(res.location.indexOf('San Francisco') !== -1){
          markers.push([res.name, res.get_lng_lat[0], res.get_lng_lat[1]]);
          infoWindowContent.push([
            `<div class="map-marker-info">` +
            `<h3>${res.name}</h3>` +
            `<span>${this.starRating(res.rating)}</span>` +
            `<p>${res.price_range}</p>` +
            `<h2>${res.phone_number}</h2>` +
            `</div>`]);
          }
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
        var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
          this.setZoom(11);
          google.maps.event.removeListener(boundsListener);
        });
    }
  }

  starRating(rating){
    let stars = {
      1: '✪',
      2: '✪✪',
      3: '✪✪✪',
      4: '✪✪✪✪',
      5: '✪✪✪✪✪'
    };
    return stars[rating];
  }

  render(){
    // if(!this.props.restaurants || this.props.restaurants.length === 0){
    //   return (
    //     <div className='loader'></div>
    //   );
    // } else {
      return (
        <div className="map-restaurants" ref="map">
        </div>
      );
    // }
  }
}

export default Map;
