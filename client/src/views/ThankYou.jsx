import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ flexDirection: "column", height: "100vh" }}
      >
        <div className="">
          <h6
            className="text-center"
            style={{
              lineHeight: "1.5em",
              fontSize: "1em",
              fontWeight: "700",
            }}
          >
            Your details have been successfully submitted and are securely
            stored with us.
          </h6>
          <br></br>
          <h6 className="text-center">We'll speak soon!</h6>
          <h6 className="text-center">
            In the meantime, why not find out more about us and our e-bikes.
          </h6>
        </div>
        <div className="d-flex justify-content-center my-4">
          <a
            className="text-center text-light px-4 py-2 text-decoration-none mx-auto rounded-5"
            style={{ backgroundColor: "#004dac" }}
            href="https://bharathcyclehub.com/collections/electric-cycles"
          >
            Explore EMotorad E-Cycles
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
