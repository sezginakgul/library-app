import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBooks from "../hooks/useBooks";

const BookCard = ({ value }) => {
  const { getBooks, books, loading } = useBooks();
  const navigate = useNavigate();
  useEffect(() => {
    getBooks(value);
  }, []);

  return (
    <>
      {loading && value === "react" && (
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
        <div className="container my-3 p-2 bg-light rounded shadow-lg">
          <div className="d-flex px-4 bg-success text-light mt-2 align-items-center justify-content-center ">
            <div className="flex-grow-1 fw-bold text-uppercase">{value}</div>
            <button
              className="btn fw-bold"
              onClick={() => navigate("/allbooks", { state: books })}
            >
              See All
            </button>
          </div>
          <div
            className="bar "
            style={{
              display: "flex",
              columnGap: "1rem",
              overflowX: "scroll",
            }}
          >
            <div className="d-flex">
              {books?.map((item) => {
                const {
                  id,
                  volumeInfo: { title, imageLinks },
                } = item;
                return (
                  <div
                    className="cards card my-4 mx-3 shadow"
                    key={id}
                    style={{ width: "250px", border: "none" }}
                  >
                    <img
                      src={
                        imageLinks?.thumbnail ||
                        "https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467.jpg"
                      }
                      style={{
                        width: "100%",
                        height: "340px",
                      }}
                      alt="img"
                      onClick={() => navigate("/details", { state: item })}
                    />
                    <div className="title p-2 fw-bold">{title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookCard;
