import { useRef, useEffect } from 'react';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import { Icon } from '../Icon/Icon';
import './styles.scss';

const libraries: 'places'[] = ['places'];

export interface SingleMarkerInterface {
  address: string;
  coordinates: { lat: number; lng: number };
}

export interface LocationPickerProps {
  address?: string;
  markerCallback?: (marker: SingleMarkerInterface) => void;
}

export const LocationPicker = ({ address, markerCallback }: LocationPickerProps) => {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    if (address && inputRef.current) {
      inputRef.current.value = address;
    }
  }, [address]);

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place?.geometry?.location) {
      markerCallback?.({
        address: place.formatted_address ?? '',
        coordinates: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
      });
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="cu-location-picker">
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input
          ref={inputRef}
          defaultValue={address}
          placeholder="Search for a location"
          aria-label="Search for a location"
          className="cu-location-picker__input"
        />
      </Autocomplete>
      <Icon name="magnifying-glass" size={16} className="cu-location-picker__icon" />
    </div>
  );
};
