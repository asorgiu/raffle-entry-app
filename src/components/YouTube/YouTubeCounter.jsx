import React, { Fragment, useEffect, useState } from 'react';
import numeral from 'numeral';

const styleCount = {
  fontSize: 14,
  color: '#eda92e',
};

const YouTubeCounter = () => {
  const [subscriberCount, setSubscriberCount] = useState();

  useEffect(() => {
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    fetch(apiCall)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        const count = numeral(data.items[0].statistics.subscriberCount).format(
          '0,0'
        );
        setSubscriberCount(count);
      });
  }, []);
  return (
    <Fragment>
      <div className="youtube">
        Help Me DIY currently has
        <span className="subscriberCount"> {subscriberCount} </span>
        subscribers!
      </div>
    </Fragment>
  );
};

export default YouTubeCounter;
