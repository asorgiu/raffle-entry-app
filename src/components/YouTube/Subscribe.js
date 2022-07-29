import { gapi } from 'gapi-script';
import React, { Component } from 'react';

class Subscribe extends Component {
  subscribe() {
    // make a request to the api
    console.log('Making subscribe request to API...');
    return gapi.client.youtube.subscriptions
      .insert({
        part: 'snippet',
        resource: {
          snippet: {
            resourceId: {
              kind: 'youtube#channel',
              channelId: process.env.REACT_APP_YOUTUBE_CHANNEL_ID,
            },
          },
        },
      })
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          console.log(err);
        }
      );
  }

  render() {
    return (
      <div className="youTubeSubscribe">
        <h2>Subscribe to Help Me DIY!</h2>

        <br></br>
        <button
          onClick={() => {
            this.subscribe();
          }}
          className="btn btn-danger btn-block"
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default Subscribe;
