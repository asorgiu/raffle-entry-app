import { gapi } from 'gapi-script';
import React, { Component } from 'react';

class YouTubeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  authenticate = () => {
    return gapi.auth2
      .getAuthInstance()
      .signIn({ scope: 'https://www.googleapis.com/auth/youtube.force-ssl' })
      .then(
        () => {
          console.log('Sign In Successful');
          this.setState({ loggedIn: true });
        },
        function (err) {
          console.log('Error signing in: ' + err);
        }
      );
  };

  subscribe = () => {
    // make a request to the api
    console.log('Making subscribe request to API...');
    var resource = {
      part: 'snippet',
      resource: {
        snippet: {
          resourceId: {
            kind: 'youtube#channel',
            channelId: process.env.REACT_APP_YOUTUBE_CHANNEL_ID,
          },
        },
      },
    };
    var request = gapi.client.youtube.subscriptions.insert(resource);
    request.execute(function (response) {
      var result = response.result;
      if (result) {
        console.log('Subscription completed - ' + result);
      } else if (
        response.code === 400 &&
        response.data[0].reason === 'subscriptionDuplicate'
      ) {
        console.log("Congrats! You're already subscribed!");
      } else {
        console.log('Subscription Failed: ' + JSON.stringify(response));
        console.log(
          'code: ' + response.code + ' reason: ' + response.data[0].reason
        );
      }
    });
    // return gapi.client.youtube.subscriptions
    //   .insert({
    //     part: 'snippet',
    //     resource: {
    //       snippet: {
    //         resourceId: {
    //           kind: 'youtube#channel',
    //           channelId: process.env.REACT_APP_YOUTUBE_CHANNEL_ID,
    //         },
    //       },
    //     },
    //   })
    //   .then(
    //     function (response) {
    //       console.log(response);
    //     },
    //     function (err) {
    //       console.log(err);
    //     }
    //   );
  };

  componentDidMount() {
    // this is taken directly from Google documentation:
    // https://developers.google.com/api-client-library/javascript/start/start-js
    function start() {
      // 2. Initialize the JavaScript client library.
      gapi.client
        .init({
          client_id: process.env.REACT_APP_YOUTUBE_CLIENT_ID,
          apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
          scope: 'https://www.googleapis.com/auth/youtube',
        })
        .then(function () {
          // 3. Initialize and make the API request.
          return gapi.client.request({
            path: 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
          });
        })
        .then(
          function (response) {
            console.log(response.result);
            gapi.client.load('youtube', 'v3', () => {});
          },
          function (reason) {
            console.log('Error: ' + reason.result.error.message);
          }
        );
    }
    // 1. Load the JavaScript client library.
    gapi.load('client', start);
  }

  render() {
    return this.state.loggedIn ? (
      <div className="youTubeLogin">
        <h2>Subscribe to Help Me DIY!</h2>
        <p>
          That's right, I'm giving away a 2002 BMW 330Ci Convertible. Free. As
          in beer.
        </p>
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
    ) : (
      <div className="youTubeLogin">
        <h2>Please Authenticate to YouTube</h2>
        <p>
          That's right, I'm giving away a 2002 BMW 330Ci Convertible. Free. As
          in beer.
        </p>
        <br></br>
        <button
          onClick={this.authenticate}
          className="btn btn-danger btn-block"
        >
          Sign into YouTube
        </button>
      </div>
    );
  }
}

export default YouTubeLogin;
