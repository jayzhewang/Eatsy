import React from 'react';

class Map extends React.Component {
  componentDidMount(){
    const mapDOMNode = this.refs.map;
    const coord = this.props.position;
    const mapOptions = {
      center: {lat: coord[0], lng: coord[1]},
      zoom: 13,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    const image = {
      url: 'http://res.cloudinary.com/cloudlicious/image/upload/v1476765387/marker_lvbtph.png',
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    };
    const marker = new google.maps.Marker({
      position: {lat: coord[0], lng: coord[1]},
      map: this.map,
      icon: image,
      title: 'Hello World!'
    });
  }

  render() {
    return (
      <div className="map" ref="map">
      </div>
    );
  }
}

export default Map;
