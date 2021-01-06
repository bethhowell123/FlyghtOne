import React, { useState } from 'react';
import ReactMapGL, {
  Marker,
  GeolocateControl,
  Popup,
  SVGOverlay,
} from 'react-map-gl';
import flightData from '../../server/dummyData';

const geolocateStyle = {
  float: 'left',
  margin: '25px',
  padding: '5px',
};

export default function Map({ width, height, viewState, onViewStateChange }) {
  // const [viewport, setViewport] = useState({
  //   latitude: 38.70755,
  //   longitude: -9.15795,
  //   zoom: 2,
  //   flightData,
  // });

  const [selectedAirport, setSelectedAirport] = useState(null);

  return (
    <ReactMapGL
      width={width}
      height={height}
      viewState={viewState}
      onViewStateChange={onViewStateChange}
      mapboxApiAccessToken={
        'pk.eyJ1IjoiYmV0aGhvd2VsbDEyMyIsImEiOiJja2o4cG93c2kzejAyMnhwMm0xc3IxYW5hIn0.Zo39oL0KBx5VGapavQigEw'
      }
      mapStyle="mapbox://styles/bethhowell123/ckjhu1rtf0scf19mmqulcv9l7"
      // onViewportChange={(viewport) => setViewport(viewport)}
    >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
      {[...flightData].map((flight) => (
        <Marker
          key={flight.flightNumber}
          longitude={flight.origin.longitude}
          latitude={flight.origin.latitude}
        >
          <button
            className="marker-btn"
            onClick={(evt) => {
              evt.preventDefault();
              setSelectedAirport(flight.origin);
            }}
          >
            📍
          </button>
        </Marker>
      ))}
      {selectedAirport && (
        <Popup
          longitude={selectedAirport.longitude}
          latitude={selectedAirport.latitude}
          className="airport-popup"
          onClose={() => {
            setSelectedAirport(null);
          }}
        >
          <div>{selectedAirport.IATA}</div>
        </Popup>
      )}
    </ReactMapGL>
  );
}
