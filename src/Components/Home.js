import React from 'react';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Peachy</h1>
        <h2>All Your Social Media Feeds in One Place</h2>
        <button class='fa fa-instagram'>Connect Instagram</button>
      </div>
    )
  }
}

export default Home