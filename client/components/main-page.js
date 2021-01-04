import React from 'react';

const travelQuotes = [
  'You need not even listen, just wait…the world will offer itself freely to you, unmasking itself. – Franz Kafka',
  'The world is full of magic things, patiently waiting for our senses to grow sharper. – W.B. Yeats',
  'The biggest adventure you can take is to live the life of your dreams. – Oprah Winfrey',
  'May your adventures bring you closer together, even as they take you far away from home. – Trenton Lee Stewart',
  'To live is the rarest thing in the world. Most people just exist. – Oscar Wilde',
  'Twenty years from now you will be more disappointed by the things you did not do than by the ones you did do. So throw off the bowlines, sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. - Mark Twain',
  'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. - Marie Curie',
];

function getTravelQuote() {
  return travelQuotes[Math.floor(Math.random() * travelQuotes.length)];
}

const MainPage = () => {
  return (
    <div>
      <div id="home-page-text">
        <h3>Fly away, little bird...</h3>
        <p>{getTravelQuote()}</p>
        <br />
      </div>
    </div>
  );
};

export default MainPage;
