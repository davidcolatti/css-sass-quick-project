import "./App.scss";

import React from "react";

const App = () => {
  return (
    <main className="container">
      <div className="inner-layer">
        <div className="top-half">
          <span className="social-tab">
            <h1>SOCIAL DISTANCING</h1>
          </span>
        </div>
        <div className="bottom-half">
          <h2 className="content">
            Stock images and videos that help spread the message to support
            social distancing.
          </h2>
          <span className="browse-tab">
            <i className="icon fa fa-clone" aria-hidden="true"></i>
            <h2 className="browse-h2">Browse</h2>
          </span>
        </div>
      </div>
    </main>
  );
};

export default App;
