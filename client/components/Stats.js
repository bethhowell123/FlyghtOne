import React from 'react';

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="my-stats">
          <p>
            Since 2018...
            <br />
            <br />
            You have taken <b>62</b> flights.
            <br />
            Your most frequently visited airport is <b>MYR</b> with 9 total
            flights.
            <br />
            You visited <b>21</b> different countries.
          </p>
          <br />
          You have flown a total of <b>91,407</b> miles.
        </div>
      </div>
    );
  }
}

export default Stats;
