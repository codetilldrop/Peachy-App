import React from 'react';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }
  
  authInstagram() {
    window.location = "https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=https://localhost/content&response_type=code";
  }

  render() {
    return (
      <div>
        <h1>Peachy</h1>
        <h2>All Your Social Media Feeds in One Place</h2>
        <button class='fa fa-instagram' onClick={() => this.authInstagram()}>Connect Instagram</button>
      </div>
    )
  }
}

export default Home