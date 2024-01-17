import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Profile from "../../Images/Profile.jpeg";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const onSignUp = (event) => {
    const data = {
      email: email,
      password: password,
    };
    if (!email || !password || !confirmPassword) {
      toast.error("All fiels are mandotory");
    } else if (password !== confirmPassword) {
      toast.error("Password and Confirm Password must be same");
    } else {
      axios
        .post("http://localhost:5678/sign-up", data)
        .then(function (response) {
          console.log(response);
          if (response.data.status) {
            toast.success(response.data.message);
            navigate("/");
          } else {
            toast.error(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    event.preventDefault();
  };

  return (
    <div>
      <ToastContainer />
      <main className="form-signin w-50 m-auto">
        <form className="p-5" onSubmit={onSignUp}>
          <img
            className="mb-4 rounded"
            src={Profile}
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control my-4"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control my-4"
              id="floatingPassword"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2 my-3" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
