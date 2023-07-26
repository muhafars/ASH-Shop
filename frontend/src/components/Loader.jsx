import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "20rem",
        height: "20rem",
        display: "block", //centering
      }}
    >
      <Spinner
        animation="grow"
        role="status"
        variant="success"
        aria-hidden="true"
        style={{
          width: "10rem",
          height: "10rem",
        }}
      ></Spinner>
      <h3>Loading...</h3>
    </div>
  );
};

export default Loader;
