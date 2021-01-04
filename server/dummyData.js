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

const MYR = {
  latitude: 33.68906,
  longitude: 78.886696,
};
const ATL = {
  latitude: 33.640411,
  longitude: -84.419853,
};
const JFK = {
  latitude: 40.641766,
  longitude: -73.780968,
};
const LIS = {
  latitude: 38.7756,
  longitude: 9.1354,
};
module.exports = flightData;
