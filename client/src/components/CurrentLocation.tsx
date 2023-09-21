import React, { useState, useEffect } from 'react'
import MapComponent from './MapComponent'

export interface LocationProps {
    latitude: number
    longitude: number
}

const CurrentLocation: React.FC<LocationProps> = () => {
    const [location, setLocation] = useState<LocationProps | null>(null)

    useEffect(() => {
        const fetchLocation = async () => {
            if ("geolocation" in navigator) {
              try {
                const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                  navigator.geolocation.getCurrentPosition(
                    (position) => resolve(position),
                    (error) => reject(error)
                  );
                });
                setLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                });
              } catch (error) {
                console.error(error);
              }
            } else {
              console.log("Geolocation is not supported by this browser.");
            }
        }

        fetchLocation()
    }, [])

    if (!location) {
        return <div>Loading...</div>
    }

    return <MapComponent latitude={location.latitude} longitude={location.longitude} />
}

export default CurrentLocation