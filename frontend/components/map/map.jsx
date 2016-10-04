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

    const marker = new google.maps.Marker({
      position: {lat: coord[0], lng: coord[1]},
      map: this.map,
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
