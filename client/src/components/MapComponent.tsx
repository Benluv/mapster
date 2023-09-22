import Map, { Marker } from 'react-map-gl/maplibre';
import { LocationProps } from './CurrentLocation';


function MapComponent({latitude, longitude}: LocationProps) { 

    return (
      <Map
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: 14
        }}
        style={{width: '90vw', height: '90vh'}}
        mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=QSOPRzVQaFs4mT9pRjCx"
      >
      </Map>
    )
}

export default MapComponent