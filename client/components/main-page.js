import React from 'react';
import { Map } from './index';

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
  return (
    <div>
      <Map />
      <div id="travel-quote">
        <p>{getTravelQuote()}</p>
      </div>
    </div>
  );
};

export default MainPage;
