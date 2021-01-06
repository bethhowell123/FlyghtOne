import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import { DeckGL, ScatterplotLayer } from 'deck.gl';
import { easeBackOut } from 'd3';

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

function SvgOverlay({ airports, radius }) {
  const redraw = ({ project }) => {
    return (
      <g>
        {airports.map((airport) => {
          const [x, y] = project(airport.position);
          return <circle key={airport.id} cx={x} cy={y} r={radius} />;
        })}
      </g>
    );
  };
  return <SVGOverlay redraw={redraw} />;
}

export default function Map({
  width,
  height,
  viewState,
  onViewStateChange,
  airports,
  radius,
}) {
  // const [viewport, setViewport] = useState({
  //   latitude: 38.70755,
  //   longitude: -9.15795,
  //   zoom: 2,
  //   flightData,
  // });

  const naAirports = React.useMemo(
    () => airports.filter((d) => d.continent === 'NA'),
    [airports]
  );
  const saAirports = React.useMemo(
    () => airports.filter((d) => d.continent === 'SA'),
    [airports]
  );

  const europeAirports = React.useMemo(
    () => airports.filter((d) => d.continent === 'EU'),
    [airports]
  );

  const asiaAirports = React.useMemo(
    () => airports.filter((d) => d.continent === 'AS'),
    [airports]
  );

  const ausAirports = React.useMemo(
    () => airports.filter((d) => d.country === 'AU'),
    [airports]
  );
  const africaAirports = React.useMemo(
    () => airports.filter((d) => d.continent === 'AF'),
    [airports]
  );

  const allAirports = [
    ...asiaAirports,
    ...africaAirports,
    ...europeAirports,
    ...saAirports,
    ...naAirports,
    ...ausAirports,
  ];

  const [selectedAirport, setSelectedAirport] = useState(null);

  const layers = [
    new ScatterplotLayer({
      id: 'scatterplot-layer',
      data: allAirports,
      getRadius: 4000 * radius,
      radiusMaxPixels: 5,
      getFillColor: [2, 188, 201],
      pickable: true,
      onClick: ({ object }) => console.log(object),
      autoHighlight: true,
      highlightColor: [0, 0, 0],
      transitions: {
        getRadius: {
          duration: 750,
          easing: easeBackOut,
        },
      },
    }),
  ];

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
      {/* {[...flightData].map((flight) => (
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
      ))} */}
      {/* {selectedAirport && (
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
      )} */}
      <DeckGL viewState={viewState} layers={layers} />

      {/* <Spring from={{ radius: 0 }} to={{ radius }}>
        {(springProps) => (
          <SvgOverlay airports={ausAirports} radius={springProps.radius} />
        )}
      </Spring> */}
    </ReactMapGL>
  );
}
