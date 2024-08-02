import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (pincode.length === 6) {
      getAddressDetails();
    }
  }, [pincode]);

  const getAddressDetails = async () => {
    const options = {
      method: "GET",
      url: `https://api.postalpincode.in/pincode/${pincode}`,
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.request(options);
      if (data[0].PostOffice) {
        setCity(data[0].PostOffice[0].District);
        setState(data[0].PostOffice[0].State);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="hero-div position-relative">
        <picture className="main-banner-img">
          <source
            media="(max-width:650px)"
            srcSet="https://ar-euro.s3.ap-south-1.amazonaws.com/india-webiste-17-02-24/landing+page/bharathCycle/Dhoni_Mobile.png"
          />
          <source
            media="(min-width:651px)"
            srcSet="https://ar-euro.s3.ap-south-1.amazonaws.com/india-webiste-17-02-24/landing+page/bharathCycle/Dhoni_Desktop.png"
          />
          <img
            src="https://ar-euro.s3.ap-south-1.amazonaws.com/india-webiste-17-02-24/landing+page/bharathCycle/Dhoni_Desktop.png"
            alt="Banner1"
            className="d-block w-100"
          />
        </picture>
        <div className="position-absolute cta">
          <a
            className="text-decoration-none text-light px-4 py-3 px-lg-5 rounded-5"
            style={{ backgroundColor: "#004dac" }}
            href="tel:+919380097119"
          >
            Call Now
          </a>
        </div>
        <div className="position-absolute form-div-desktop  rounded-4">
          <form onSubmit={submitLead} className="mx-auto p-4">
            <div className="">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
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
                  className="form-label"
                >
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    const phoneNumber = e.target.value.slice(0, 12);
                    setPhoneNumber(phoneNumber);

                    if (/^[6-9]\d{9}$/.test(phoneNumber)) {
                      e.target.setCustomValidity("");
                    } else {
                      e.target.setCustomValidity(
                        "Enter a valid phone number (10 digits, starting with 6, 7, 8, or 9)"
                      );
                    }
                  }}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Enter a valid phone number (10 digits, starting with 6, 7, 8, or 9)"
                    )
                  }
                  class="form-control"
                  id="floatingInput"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Pincode*
                </label>
                <input
                  type="number"
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
                    className="form-label"
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
                    className="form-label"
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
      <div className="form-div-mobile mx-auto mt-4  rounded-4">
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
                required
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
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => {
                  const phoneNumber = e.target.value.slice(0, 12);
                  setPhoneNumber(phoneNumber);

                  if (/^[6-9]\d{9}$/.test(phoneNumber)) {
                    e.target.setCustomValidity("");
                  } else {
                    e.target.setCustomValidity(
                      "Enter a valid phone number (10 digits, starting with 6, 7, 8, or 9)"
                    );
                  }
                }}
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Enter a valid phone number (10 digits, starting with 6, 7, 8, or 9)"
                  )
                }
                class="form-control"
                id="floatingInput"
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
                type="number"
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
                  autoComplete="new-password"
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
                  autoComplete="new-password"
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
    </>
  );
};

export default Home;
