import React from "react";
import "./index.css"

const Views = () => {
  return (
    <>
      <div className=" justify-content-center text-center text-light p-1  ">
        <div className="row">
        <div className=" col-sm-12 col-md-12 d-flex  justify-content-center images">
        <div className="p-3 images">
          <img className=""
            style={{ border: "3px solid white", borderRadius: "20px" }}
            width="90%"
            height="50%"
            src={require("./Images/success view.png")}
            alt="success view"
          />
          <h3>Success view</h3>
        </div>
        <div className="p-3 images">
          <img
            style={{ border: "3px solid white", borderRadius: "20px" }}
            width="90%"
            height="50%"
            src={require("./Images/Loading view.png")}
            alt="success view"
          />
          <h3>Loading view</h3>
        </div>
        <div className="p-3 images">
          <img
            style={{ border: "3px solid white", borderRadius: "20px" }}
            width="90%"
            height="50%"
            src={require("./Images/Failure view.png")}
            alt="success view"
          />
          <h3>Failure view</h3>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Views;
