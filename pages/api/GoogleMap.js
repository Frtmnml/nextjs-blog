// GoogleMap.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const costaRicaCenter = {
  lat: 9.7489,
  lng: -83.7534,
};

const defaultBounds = {
    north: 11.2194,
    south: 8.0329,
    east: -82.5466,
    west: -85.9508,
}

const markers = [
  { id:1, position: {lat: 9.7489, lng: -83.7534}, title: 'San Jose' },
  { id:2, position: {lat: 10.3157, lng: -84.4398}, title: 'Liberia' },
]

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC-znCKyB5xFUlglN4LWHs8GiHeMpV_ygU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={costaRicaCenter}
        zoom={10}
        options={{ restriction: { latLngBounds: defaultBounds, strictBounds: false}}}
      >
        {markers.map((marker) =>(
          <Marker key={marker.id} position={marker.position} title={marker.title}/>
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;