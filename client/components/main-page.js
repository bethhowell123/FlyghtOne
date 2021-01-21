import React, { useState } from 'react';
import { Map } from './index';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';
import { Locations } from '../../server/dummyData';
import { csv } from 'd3';
import myFlights from '../../server/myFlights';

const MainPage = () => {
  const [viewState, setViewState] = useState({
    latitude: 38.70755,
    longitude: -9.15795,
    zoom: 2,
    pitch: 40,
  });

  const handleChangeViewState = ({ viewState }) => setViewState(viewState);

  const handleFlyTo = (destination) => {
    setViewState({
      ...viewState,
      ...destination,
      transitionDuration: 2000,
      transitionInterpolator: new FlyToInterpolator(),
    });
    //console.log(destination);
  };

  const handleFlyToRandom = (destination) => {
    setViewState({
      zoom: 7,
      pitch: 42,
      latitude: destination[0],
      longitude: destination[1],
      transitionDuration: 2000,
      transitionInterpolator: new FlyToInterpolator(),
    });
    //console.log(destination);
  };

  const [airports, setAirports] = useState([]);
  React.useEffect(() => {
    csv(
      'https://raw.githubusercontent.com/bethhowell123/airportsCSV/master/airports%20(2).csv',
      (d) => ({
        id: d['id'],
        name: d['name'],
        type: d['type'],
        country: d['iso_country'],
        continent: d['continent'],
        iata: d['iata_code'],
        position: [+d['longitude_deg'], +d['latitude_deg']],
      })
    )
      .then((airports) =>
        airports.filter(
          (d) => d.type === 'medium_airport' || d.type === 'large_airport'
        )
      )
      .then((airports) =>
        airports.filter((d) => d.position[0] !== null && d.position[1] !== null)
      )
      .then(setAirports);
  }, []);

  const [radius, setRadius] = React.useState(2);
  const handleToggleRadius = () => {
    setRadius(radius > 0 ? 0 : 2);
  };

  const [arcsEnabled, setArcsEnabled] = React.useState(false);
  const handleToggleArcs = () => {
    setArcsEnabled(!arcsEnabled);
  };

  const [myArcsEnabled, setMyArcsEnabled] = React.useState(true);
  const handleToggleMyArcs = () => {
    setMyArcsEnabled(!myArcsEnabled);
  };

  return (
    <div>
      <button id="fly-btn">Take Flyght</button>
      {/* <button id="fly-home-btn" onClick={handleFlyTo}>
        Fly Home
      </button> */}
      <button id="toggle-airports" onClick={handleToggleRadius}>
        Show/Hide Airports
      </button>
      <button id="toggle-arcs" onClick={handleToggleArcs}>
        Show/Hide Routes
      </button>
      <button id="toggle-flights" onClick={handleToggleMyArcs}>
        Show/Hide My Flights
      </button>
      <div id="iata-btns">
        {Object.keys(Locations).map((key) => {
          return (
            <button key={key} onClick={() => handleFlyTo(Locations[key])}>
              {key}
            </button>
          );
        })}
        <button
          id="random"
          onClick={() =>
            handleFlyToRandom(
              myFlights[Math.floor(Math.random() * myFlights.length)]
                .destination.position
            )
          }
        >
          Random
        </button>
      </div>
      <div id="map-container">
        <Map
          width="75vw"
          height="75vh"
          viewState={viewState}
          onViewStateChange={handleChangeViewState}
          airports={airports}
          radius={radius}
          arcsEnabled={arcsEnabled}
          myArcsEnabled={myArcsEnabled}
        />
      </div>
    </div>
  );
};

export default MainPage;
