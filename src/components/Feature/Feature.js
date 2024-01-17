import React, { useEffect, useState } from "react";
import Profile from "../../Images/Profile.jpeg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Feature() {
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
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <ToastContainer />
      <h1 className="display-4 fw-bold text-body-emphasis">
        {userData[1]?.title}
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{userData[1]?.para}</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 me-sm-3"
            onClick={() => toast("Primary button clicked")}
          >
            Primary button
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
            onClick={() => toast("Secondary button clicked")}
          >
            Secondary
          </button>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
        <div className="container px-5">
          <img
            src={Profile}
            className="img-fluid border rounded-5 shadow-lg mb-4"
            alt="Example image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;
