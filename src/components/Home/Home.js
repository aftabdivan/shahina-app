import React, { useEffect, useState } from "react";
import Profile from "../../Images/Profile.jpeg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Home() {
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
    <div className="px-4 py-5 my-5 text-center">
      <ToastContainer />
      <img
        className="d-block mx-auto mb-4 rounded"
        src={Profile}
        alt=""
        width="80"
        height="80"
      />
      <h1 className="display-5 fw-bold text-body-emphasis">
        {userData[0]?.title}
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{userData[0]?.para}</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
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
    </div>
  );
}

export default Home;
