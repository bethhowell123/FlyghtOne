// import React, { useRef, useEffect } from 'react';

// class Map extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lat: 38.71328827327413,
//       lng: -9.142917534985767,
//       zoom: 2,
//     };
//   }

//   componentDidMount() {
//     const map = new mapboxgl.Map({
//       container: 'mapid',
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [this.state.lng, this.state.lat],
//       zoom: this.state.zoom,
//     });
//     console.log(map);
//   }
// }

import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
  const [viewport, setViewport] = useState({
    lat: 38.70755,
    long: -9.15795,
    width: '75vw',
    height: '75vh',
    zoom: 3,
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          'pk.eyJ1IjoiYmV0aGhvd2VsbDEyMyIsImEiOiJja2o4cG93c2kzejAyMnhwMm0xc3IxYW5hIn0.Zo39oL0KBx5VGapavQigEw'
        }
        mapStyle="mapbox://styles/bethhowell123/ckjhu1rtf0scf19mmqulcv9l7"
        onViewportChange={(viewport) => setViewport(viewport)}
      ></ReactMapGL>
    </div>
  );
}
