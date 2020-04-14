import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (!lat && !errorMessage) {
    content = <Spinner message="Please accept location request" />;
  } else if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else {
    content = <SeasonDisplay lat={lat} />;
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
