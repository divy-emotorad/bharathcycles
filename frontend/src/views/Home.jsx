import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/Home.css";
import useWebSocket from "../hooks/useWebSocket";

const websocketUrl = "wss://omsapi.emotorad.com/ws";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6IjBkZGU2NDlmLTM0MGUtNGVhZC1hMWM4LTNhNTcwOWYzZWU3NSIsImV4cCI6MTc1Mzk1Nzc5MSwiaWF0IjoxNzIyNDIxNDkxfQ.0oSW3UQNaGFMEGvefSrfSCLdCiq6JZ-OOJgOPHxdo60";

const Home = () => {
  const [pinCodeDetails, setPinCodeDetails] = useState(null);

  const handleWebSocketMessage = (message) => {
    setPinCodeDetails(message);
  };

  const sendRequest = useWebSocket(websocketUrl, token, handleWebSocketMessage);

  useEffect(() => {
    const request = {
      transmit: "broadcast",
      url: "pin_code_search",
      request: {
        pin_code: "313001",
      },
      DeviceId: "c5b271f4-5b29-4509-9944-94916c852c92",
      TabId: "0.4211810280407591",
    };

    sendRequest(request);
  }, [sendRequest]);
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
      <div className="hero-div d-none d-lg-block">
        <div className="d-flex align-items-center">
          <div className="dhoni-div"> </div>
          <div className="form-div mx-auto">
            <h1 className="text-center speedbeast mb-5">e&nbsp;motorad</h1>
            <div>
              <form
                onSubmit={submitLead}
                className="mx-auto pt-3"
                style={{ width: "65%" }}
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
                  className="btn mt-lg-4 mt-3 text-light w-100"
                  style={{ backgroundColor: "#004dac", padding: "0.7em" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none">
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
      </div>
    </>
  );
};

export default Home;
