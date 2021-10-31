const ParallaxBG = ({ url, children = "Garden Friends" }) => {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url( " + url + " )",
          backgroundAttachment: "fixed",
          padding: "100px 0px 75px 0px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: "block",
        }}
      >
        <h1 className="display-1 font-weight-bold text-center text-light">{children}</h1>
        <h2 className="display-6 text-center text-light">A pretty basic Social Network to learn MongoDB, Express, React and Node.js</h2>
      </div>
    );
  };
  
  export default ParallaxBG;  