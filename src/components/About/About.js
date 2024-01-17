import React, { useEffect, useState } from "react";
import Profile from "../../Images/Profile.jpeg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function About() {
  const [userData, setUserData] = useState([]);

  const pageData = () => {
    axios
      .get("http://localhost:5678/page-data")
      .then((response) => {
        if (response.status === 200) {
          setUserData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    pageData();
  }, []);
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <ToastContainer />
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={Profile}
            className="d-block mx-lg-auto img-fluid rounded-5"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            {userData[3]?.title}
          </h1>
          <p className="lead">{userData[3]?.para}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              onClick={() => toast("Primary button clicked")}
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              onClick={() => toast("Default button clicked")}
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
