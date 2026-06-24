import { useState, useRef, useCallback } from 'react';
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import './styles.scss';

export interface MarkerData {
  id: string;
  name: string;
  position: { lat: number; lng: number };
}

export interface LocationProps {
  lat?: string;
  lng?: string;
  location?: string;
  zoom?: number;
  markers?: MarkerData[];
  center?: { lat: string; lng: string };
  isRounded?: boolean;
}

export const Location = ({
  markers,
  location,
  lat,
  lng,
  zoom = 15,
  center,
  isRounded = true,
}: LocationProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = useCallback(
    (map: google.maps.Map) => {
      if (markers && markers.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
      } else {
        mapRef.current = map;
      }
    },
    [markers],
  );

  const handleActiveMarker = (markerId: string) => {
    if (markerId !== activeMarker) {
      setActiveMarker(markerId);
    }
  };

  const mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
    panControl: true,
    streetViewControl: true,
  };

  const parsedLat = lat ? Number(lat) : undefined;
  const parsedLng = lng ? Number(lng) : undefined;

  const mapCenter = center
    ? { lat: parseFloat(center.lat), lng: parseFloat(center.lng) }
    : parsedLat !== undefined && parsedLng !== undefined
      ? { lat: parsedLat, lng: parsedLng }
      : { lat: 45.3850225, lng: -75.6946679 };

  const rootClasses = ['cu-location', isRounded ? 'cu-location--rounded' : undefined]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses} role="region" aria-label={location ?? 'Map'}>
      <GoogleMap
        mapContainerClassName="cu-location__map"
        zoom={markers && markers.length > 0 ? 10 : zoom}
        options={mapOptions}
        center={mapCenter}
        onLoad={onMapLoad}
      >
        {parsedLat !== undefined && parsedLng !== undefined && (
          <MarkerF
            title={location}
            onClick={() => setShowInfo(true)}
            position={{ lat: parsedLat, lng: parsedLng }}
          />
        )}

        {markers?.map(({ id, name, position }) => (
          <MarkerF key={id} position={position} onClick={() => handleActiveMarker(id)}>
            {activeMarker === id ? (
              <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindowF>
            ) : null}
          </MarkerF>
        ))}

        {showInfo && parsedLat !== undefined && parsedLng !== undefined && (
          <InfoWindowF
            position={{ lat: parsedLat + 0.0009, lng: parsedLng }}
            onCloseClick={() => setShowInfo(false)}
          >
            <div className="cu-location__info">
              <p>{location}</p>
              <p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location}&z=15`}
                  className="cu-location__info-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </div>
  );
};
