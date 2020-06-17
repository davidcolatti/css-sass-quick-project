import "./App.scss";

import React from "react";

const App = () => {
  return (
    <main className="post-container">
      <div className="post-inner-layer">
        <div className="post-top-half">
          <span className="post-social-tab">
            <h1>SOCIAL DISTANCING</h1>
          </span>
        </div>
        <div className="post-bottom-half">
          <h2 className="post-content">
            Stock images and videos that help spread the message to support
            social distancing.
          </h2>
          <span className="post-browse-tab">
            <i className="post-icon fa fa-clone" aria-hidden="true"></i>
            <h2 className="post-browse-h2">Browse</h2>
          </span>
        </div>
      </div>
    </main>
  );
};

export default App;
