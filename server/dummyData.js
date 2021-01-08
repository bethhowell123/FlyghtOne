const flightData = [
  {
    origin: {
      IATA: 'MYR',
      latitude: 33.68906,
      longitude: -78.886696,
    },
    destination: 'ATL',
    date: '2018-09-29',
    time: '06:10',
    airline: 'DL',
    flightNumber: '2471',
  },
  {
    origin: {
      IATA: 'ATL',
      latitude: 33.640411,
      longitude: -84.419853,
    },
    destination: 'JFK',
    date: '2018-09-29',
    time: '10:30',
    airline: 'DL',
    flightNumber: '843',
  },
  {
    origin: {
      IATA: 'JFK',
      latitude: 40.641766,
      longitude: -73.780968,
    },
    destination: 'LIS',
    date: '2018-09-29',
    time: '23:25',
    airline: 'TAP',
    flightNumber: '208',
  },
];

export const Locations = {
  MYR: {
    latitude: 33.68906,
    longitude: -78.886696,
    zoom: 7,
    pitch: 30,
    bearing: 0.7,
  },
  ATL: {
    latitude: 33.640411,
    longitude: -84.419853,
    zoom: 10,
    pitch: 48,
    bearing: 0.7,
  },
  JFK: {
    latitude: 40.641766,
    longitude: -73.780968,
    zoom: 10,
    pitch: 40,
    bearing: -0.7,
  },
  LIS: {
    latitude: 38.77557685108355,
    longitude: -9.135345244470109,
    zoom: 10,
    pitch: 54,
    bearing: -0.7,
  },
};

export default flightData;
