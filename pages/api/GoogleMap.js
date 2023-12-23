// GoogleMap.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC-znCKyB5xFUlglN4LWHs8GiHeMpV_ygU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;