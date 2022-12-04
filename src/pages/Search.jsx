import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state: search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`;
      try {
        const { data } = await axios(URL);
        setBooks(data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {loading && (
        <div
          className="s w-100  d-flex justify-content-center align-items-center"
          style={{ height: "88vh" }}
        >
          <div
            className="spinner-border text-success"
            style={{ width: "6rem", height: "6rem" }}
            role="status"
          ></div>
        </div>
      )}
      {!loading && (
        <div className="mb-3">
          <div className="container ">
            <h1 className="text-center text-success fw-bolder display-4">
              SEARCH
            </h1>
            <div className="d-flex flex-wrap justify-content-center border border-3 border-success mb-4 rounded ">
              {books?.map((item) => {
                const {
                  id,
                  volumeInfo: { title, imageLinks, authors, publishedDate },
                } = item;
                return (
                  <div
                    className="cards card m-4 shadow-lg"
                    key={id}
                    style={{ width: "250px", border: "none" }}
                    onClick={() => navigate("/details", { state: item })}
                  >
                    <img
                      src={
                        imageLinks?.thumbnail ||
                        "https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467.jpg"
                      }
                      className=""
                      style={{
                        width: "100%",
                        height: "340px",
                      }}
                      alt="img"
                    />
                    <div className="title p-2 fw-bold text-capitalize">
                      {title}
                      <br />
                      <span className="text-dark">Authors:</span>{" "}
                      {authors?.map((item) => item)}
                      <br />
                      <small className="text-dark">{publishedDate}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-success"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
