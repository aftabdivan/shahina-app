import React, { useState } from "react";
import Profile from "../../Images/Profile.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onLogin = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:5678/login", {
        params: {
          email: email,
          password: password,
        },
      })
      .then((res) => {
        if (res.data.length) {
          localStorage.setItem("user", JSON.stringify(res.data));
          toast.success("Login successfully");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error("Wrong credentials");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="form-signin w-50 m-auto">
      <ToastContainer />
      <form className="p-5" onSubmit={onLogin}>
        <img
          className="mb-4 rounded"
          src={Profile}
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 my-4 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-center text-body-secondary">© 2024</p>
      </form>
    </main>
  );
}

export default Login;
