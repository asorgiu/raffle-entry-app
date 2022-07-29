const About = () => {
  return (
    <div className="about">
      <h2>Win A Free Car!</h2>
      <p>
        That's right, I'm giving away a 2002 BMW 330Ci Convertible. Free. As in
        beer.
      </p>
      <p>Check out the video: </p>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dc4Pp7FiKYQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default About;
