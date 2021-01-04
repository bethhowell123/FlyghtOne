import React, { useState } from 'react';
import ReactMapGL, { Marker, GeolocateControl, Popup } from 'react-map-gl';
const flightData = require('../../server/dummyData');

const geolocateStyle = {
  float: 'left',
  margin: '25px',
  padding: '5px',
};

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 38.70755,
    longitude: -9.15795,
    width: '75vw',
    height: '75vh',
    zoom: 2,
    flightData,
  });

  const [selectedAirport, setSelectedAirport] = useState(null);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          'pk.eyJ1IjoiYmV0aGhvd2VsbDEyMyIsImEiOiJja2o4cG93c2kzejAyMnhwMm0xc3IxYW5hIn0.Zo39oL0KBx5VGapavQigEw'
        }
        mapStyle="mapbox://styles/bethhowell123/ckjhu1rtf0scf19mmqulcv9l7"
        onViewportChange={(viewport) => setViewport(viewport)}
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
    </div>
  );
}
