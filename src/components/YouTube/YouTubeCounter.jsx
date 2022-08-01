import React, { Fragment, useEffect, useState } from 'react';
import numeral from 'numeral';

const YouTubeCounter = () => {
  const [subscriberCount, setSubscriberCount] = useState();
  const [videoCount, setVideoCount] = useState();
  const [viewCount, setViewCount] = useState();

  useEffect(() => {
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    fetch(apiCall)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        const numSubscribers = numeral(
          data.items[0].statistics.subscriberCount
        ).format('0,0');
        setSubscriberCount(numSubscribers);
        const numVideos = numeral(data.items[0].statistics.videoCount).format(
          '0,0'
        );
        setVideoCount(numVideos);
        const numViews = numeral(data.items[0].statistics.viewCount).format(
          '0,0'
        );
        setViewCount(numViews);
      });
  }, []);
  return (
    <Fragment>
      <div className="youtube">
        <p>
          Help Me DIY currently has
          <span className="subscriberCount"> {subscriberCount} </span>
          subscribers
        </p>
        <br />
        <p>
          and has posted
          <span className="subscriberCount"> {videoCount} </span>
          videos
        </p>
        <p>
          with an incredible{' '}
          <span className="subscriberCount"> {viewCount} </span>views!
        </p>
      </div>
    </Fragment>
  );
};

export default YouTubeCounter;
