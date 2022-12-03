import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toastGreenNotify } from "../helpers/toastNotify";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    if (!search) {
      toastGreenNotify("Search after entering a word");
    } else {
      (async () => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`;
        try {
          const { data } = await axios(URL);
          localStorage.setItem("data", JSON.stringify(data.items));
          navigate("/search");
        } catch (error) {
          console.log(error);
        }
      })();
      setSearch("");
    }
  };
  return (
    <div className="container mb-3 px-0">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark p-2">
        <Link className="navbar-brand" to="/">
          Library App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search || ""}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={submitHandle}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
