import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Profile from "../../Images/Profile.jpeg";

function Header() {
  const user = localStorage.getItem("user");
  const [isLogin, setIsLogin] = useState(user?.length ? true : false);
  const navigate = useNavigate();
  const logoutHandle = () => {
    localStorage.clear();
    setIsLogin(false);
    navigate("/login");
  };
  useEffect(() => {
    setIsLogin(user?.length > 1 ? true : false);
  });

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 px-5 mb-4">
      <div className="col-md-3 mb-2 mb-md-0">
        <a
          href="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <img
            className="bi rounded"
            width="40"
            height="32"
            src={Profile}
            aria-label="Bootstrap"
          />
        </a>
      </div>

      {isLogin && (
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 "
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/feature"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 "
              }
            >
              Feature
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/pricing"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 "
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 "
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      )}

      <div className="col-md-3 text-end">
        {!isLogin ? (
          <>
            <NavLink to={"/login"}>
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
            </NavLink>
            <NavLink to={"/sign-up"}>
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>
            </NavLink>
          </>
        ) : (
          <button
            type="button"
            onClick={logoutHandle}
            className="btn btn-primary"
          >
            Log out
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
