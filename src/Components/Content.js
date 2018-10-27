import React from 'react';

class Content extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    var CLIENT_ID = getUrlVars()['access_token'];
    console.log(client_id);
  }

  getUrlVars() {
    var vals = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vals[key] = value;
    });
    return vals;
  }

  render() {
    return (
      <div>
        <h1>Peachy</h1>
        <h2>All Your Social Media Feeds in One Place</h2>
        <p>Successfully Connected to Instagram</p>
      </div>
    )
  }
}

export default Content