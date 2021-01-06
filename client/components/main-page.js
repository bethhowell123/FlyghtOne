import React, { useState } from 'react';
import { Map } from './index';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';
import { Locations } from '../../server/dummyData';
import { csv } from 'd3';

const travelQuotes = [
  'You need not even listen, just wait…the world will offer itself freely to you, unmasking itself. – Franz Kafka',
  'The world is full of magic things, patiently waiting for our senses to grow sharper. – W.B. Yeats',
  'The biggest adventure you can take is to live the life of your dreams. – Oprah Winfrey',
  'May your adventures bring you closer together, even as they take you far away from home. – Trenton Lee Stewart',
  'To live is the rarest thing in the world. Most people just exist. – Oscar Wilde',
  'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. - Marie Curie',
];

function getTravelQuote() {
  return travelQuotes[Math.floor(Math.random() * travelQuotes.length)];
}

const MainPage = () => {
  const [viewState, setViewState] = useState(Locations.MYR);

  const handleChangeViewState = ({ viewState }) => setViewState(viewState);

  const handleFlyTo = (destination) => {
    setViewState({
      ...viewState,
      ...destination,
      transitionDuration: 2000,
      transitionInterpolator: new FlyToInterpolator(),
    });
  };

  const [airports, setAirports] = useState([]);
  React.useEffect(() => {
    csv('../../api/public/airports.csv', (d) => ({
      id: d['id'],
      type: d['type'],
      country: d['iso_country'],
      iata: d['iata_code'],
      position: [+d['longitude_deg'], +d['latitude_deg']],
    }))
      // .then((airports) =>
      //   airports.filter(
      //     (d) => d.type === 'medium_airport' || d.type === 'large_airport'
      //   )
      // )
      .then(setAirports);
  }, []);

  console.log(airports);

  return (
    <div>
      <button id="fly-btn">Take Flyght</button>
      {/* <button id="fly-home-btn" onClick={handleFlyTo}>
        Fly Home
      </button> */}
      <div>
        {Object.keys(Locations).map((key) => {
          return (
            <button key={key} onClick={() => handleFlyTo(Locations[key])}>
              {key}
            </button>
          );
        })}
      </div>
      <Map
        width="75vw"
        height="75vh"
        viewState={viewState}
        onViewStateChange={handleChangeViewState}
      />
      {/* <div id="travel-quote">
        <p>{getTravelQuote()}</p>
      </div> */}
    </div>
  );
};

export default MainPage;
