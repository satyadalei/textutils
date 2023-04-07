import React from "react";
// import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`}
      data-bs-theme={`${props.mode}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/"> */}
          {/* {props.title} */}
        {/* </Link> */}
        <a href="/" className="navbar-brand">TextUtils</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          my-3
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active"  to="/"> Home */}
                  {/* {" "} */}
                  {/* {props.link1}{" "} */}
              {/* </Link> */}
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about"> About */}
                {/* {" "} */}
                {/* {props.link2}{" "} */}
              {/* </Link> */}
            </li>
          </ul>

          <div
            className={`form-check form-switch mx-3 text-${
              props.mode === `dark` ? `light` : `dark`
            }`}
          >
            <input onClick={props.handleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {/* Enable darkmode */}
              {props.mode === "dark" ? "Disable dark Mode" : "Enable dark mode"}
            </label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
  /*All default properties will be described here */
}

export default Navbar;
