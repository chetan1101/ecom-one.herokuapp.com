import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className="loading_box">
      <Spinner animation="grow" variant="warning" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
