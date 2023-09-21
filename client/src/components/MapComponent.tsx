import Map from 'react-map-gl/maplibre';
import { LocationProps } from './CurrentLocation';


function MapComponent({latitude, longitude}: LocationProps) { 

    return (
      <Map
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: 14
        }}
        style={{width: '100vw', height: '100vh'}}
        mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=QSOPRzVQaFs4mT9pRjCx"
      >
        {/* <Marker longitude={-122.4} latitude={37.8} color="red" /> */}
      </Map>
    )
}

export default MapComponent