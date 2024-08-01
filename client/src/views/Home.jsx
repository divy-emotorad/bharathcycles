import { useState } from "react";
import axios from "axios";
import "../assets/css/Home.css";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const submitLead = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const lead = { name, email, phoneNumber, pincode, city, state };
    const { data } = await axios.post("/api/v1/form", lead, config);
    if (data) {
      alert("Details Submitted Succesfully!");
    }
  };

  return (
    <>
      <div className="hero-div position-relative">
        <img
          src="https://ar-euro.s3.ap-south-1.amazonaws.com/india-webiste-17-02-24/landing+page/bharathCycle/banner_bharathcycle.png"
          className="w-100"
        ></img>
        <div className="position-absolute form-div-desktop  rounded-4 d-none d-lg-block">
          <form onSubmit={submitLead} className="mx-auto p-4">
            <div className="">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Name*
                </label>
                <input
                  type="text"
                  className="form-control w-100"
                  value={name}
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="exampleFormControlInput1"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  required
                  onChange={(e) => {
                    setPhoneNumber(e.target.value.slice(0, 11));
                    e.target.setCustomValidity("");
                  }}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Enter a valid phone number")
                  }
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Pincode*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Pin Code"
                  value={pincode}
                  required
                  onChange={(e) => {
                    setPincode(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex mb-3" style={{ gap: "1em" }}>
                <div className=" w-50">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-light"
                  >
                    City
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </div>
                <div className=" w-50">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-light"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter State"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn mt-3 w-100 submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <div className="d-lg-none">
        <picture className="main-banner-img">
          <source
            media="(max-width:650px)"
            srcSet="https://ar-euro.s3.ap-south-1.amazonaws.com/india-webiste-17-02-24/landing+page/bharathCycle/Dhoni_Mobile.jpg"
          />
          <source
            media="(min-width:651px)"
            srcSet="https://ar-euro.s3.ap-south-1.amazonaws.com/india-webiste-17-02-24/landing+page/bharathCycle/Dhoni_Desktop.jpg"
          />
          <img
            src="https://ar-euro.s3.ap-south-1.amazonaws.com/india-webiste-17-02-24/landing+page/bharathCycle/Dhoni_Desktop.jpg"
            alt="Banner1"
            className="d-block w-100"
          />
        </picture>
        <div className="p-3">
          <h1 className="text-center speedbeast mb-3">e&nbsp;motorad</h1>
          <form
            onSubmit={submitLead}
            className="mx-auto form-mobile-div p-4"
            style={{ width: "95%" }}
          >
            <div className="">
              <div className="mb-4">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control w-100"
                  value={name}
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  value={phoneNumber}
                  required
                  onChange={(e) => {
                    setPhoneNumber(e.target.value.slice(0, 11));
                    e.target.setCustomValidity("");
                  }}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Enter a valid phone number")
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Pincode
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  value={pincode}
                  required
                  onChange={(e) => {
                    setPincode(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex" style={{ gap: "1em" }}>
                <div className="mb-4 w-50">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    City
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-4 w-50">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn mt-lg-4 mt-3 text-light w-100 rounded-3"
              style={{ backgroundColor: "#004dac" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div> */}
      <div className="p-3 d-lg-none">
        <div className="form-div-mobile rounded-4 mx-auto ">
          <form onSubmit={submitLead} className="mx-auto p-4">
            <div className="">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Name*
                </label>
                <input
                  type="text"
                  className="form-control w-100"
                  value={name}
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="exampleFormControlInput1"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  required
                  onChange={(e) => {
                    setPhoneNumber(e.target.value.slice(0, 11));
                    e.target.setCustomValidity("");
                  }}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Enter a valid phone number")
                  }
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                >
                  Pincode*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Pin Code"
                  value={pincode}
                  required
                  onChange={(e) => {
                    setPincode(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex mb-3" style={{ gap: "1em" }}>
                <div className=" w-50">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-light"
                  >
                    City
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </div>
                <div className=" w-50">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label text-light"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter State"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn mt-3 w-100 submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
