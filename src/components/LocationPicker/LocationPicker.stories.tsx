import { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoadScript } from '@react-google-maps/api';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { LocationPicker, type SingleMarkerInterface } from './LocationPicker';
import { Location } from '../Location/Location';

const meta: Meta<typeof LocationPicker> = {
    title: 'Components/Forms/LocationPicker',
    component: LocationPicker,
    tags: ['!autodocs'],
    decorators: [
        (Story) => (
            <LoadScript
                googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                libraries={['places']}
            >
                <Story />
            </LoadScript>
        ),
        (Story) => (
            <Main>
                <Section>
                    <Story />
                </Section>
            </Main>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
        controls: { sort: 'requiredFirst' },
    },
};

export default meta;
type Story = StoryObj<typeof LocationPicker>;

const defaultCoords: SingleMarkerInterface = {
    coordinates: { lat: 45.3850225, lng: -75.6946679 },
    address: "Carleton University Raven's Nest",
};

const SingleMarkerDemo = () => {
    const [marker, setMarker] = useState<SingleMarkerInterface>(defaultCoords);
    const handleMarker = useCallback((coords: SingleMarkerInterface) => setMarker(coords), []);

    return (
        <>
            <LocationPicker address={marker.address} markerCallback={handleMarker} />
            <Location
                lat={marker.coordinates.lat.toString()}
                lng={marker.coordinates.lng.toString()}
                location={marker.address}
            />
        </>
    );
};

const nyCoords: SingleMarkerInterface = {
    coordinates: { lat: 40.712776, lng: -74.005974 },
    address: 'New York City, NY',
};

const LocationAddressDemo = () => {
    const [marker, setMarker] = useState<SingleMarkerInterface>(nyCoords);
    const handleMarker = useCallback((coords: SingleMarkerInterface) => setMarker(coords), []);

    return (
        <>
            <LocationPicker address={marker.address} markerCallback={handleMarker} />
            <Location
                lat={marker.coordinates.lat.toString()}
                lng={marker.coordinates.lng.toString()}
                location={marker.address}
            />
        </>
    );
};

export const SingleMarker: Story = {
    render: () => <SingleMarkerDemo />,
};

export const LocationAddress: Story = {
    render: () => <LocationAddressDemo />,
};
