import axios from "axios";
import React, { useState } from "react";

function Navbar() {
  const [Stext, setStext] = useState("");

  const handleChange = (e) => {
    setStext(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?s=${Stext}&apikey=48dab342`)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Shark
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Favourite
                </a>
              </li>
            </ul>
            <form className="d-flex" onSubmit={submithandler}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={Stext}
                onChange={handleChange}
              />
              <button className="btn btn-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
