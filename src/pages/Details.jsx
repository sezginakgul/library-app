import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const { state: book } = useLocation();
  const navigate = useNavigate();

  const {
    saleInfo: { retailPrice },
    volumeInfo: {
      title,
      imageLinks,
      categories,
      authors,
      description,
      pageCount,
      language,
      previewLink,
      publishedDate,
      publisher,
    },
  } = book;
  return (
    <div className="mb-3">
      <h1 className="text-center text-success fw-bolder display-4">
        BOOK DETAILS
      </h1>
      <div className="card mb-4 container card border border-3 border-success shadow-lg">
        <div className="row g-0">
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <img
              src={
                imageLinks?.thumbnail ||
                "https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467.jpg"
              }
              className="card-img-top object-cover mx-auto shadow-lg rounded my-2"
              alt="img"
            />
          </div>
          <div className="col-md-7 ">
            <div className="card-body">
              <h5 className="card-title text-center  text-primary fw-bold ">
                {title}
              </h5>
              <p className="card-text text-muted ">{description}</p>
              {categories && (
                <div className="card-text fw-bold text-primary">
                  Categories:
                  <span className="fw-normal text-success"> {categories}</span>
                </div>
              )}
              {language && (
                <div className="card-text fw-bold text-primary">
                  Language:
                  <span className="fw-normal text-success text-uppercase">
                    {" "}
                    {language}
                  </span>
                </div>
              )}
              <div className="card-text fw-bold text-primary">
                Pages:
                <span className="fw-normal text-success"> {pageCount}</span>
              </div>
              {authors && (
                <div className="card-text fw-bold text-primary">
                  Authors:
                  <small className="fw-normal text-success">
                    {authors.map((p, i) => (
                      <div key={i}>{p}</div>
                    ))}
                  </small>
                </div>
              )}
              {publishedDate && (
                <div className="card-text fw-bold text-primary">
                  Published Date:
                  <span className="fw-normal text-success">
                    {" "}
                    {publishedDate}
                  </span>
                </div>
              )}
              {publisher && (
                <div className="card-text fw-bold text-primary">
                  Publisher:
                  <span className="fw-normal text-success"> {publisher}</span>
                </div>
              )}
              {retailPrice && (
                <div className="card-text fw-bold text-primary">
                  Price:
                  <span className="fw-normal text-danger">
                    {" "}
                    {retailPrice.amount} {retailPrice.currencyCode}
                  </span>
                </div>
              )}

              {previewLink && (
                <a
                  className="fw-bold"
                  href={previewLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  E-Book
                </a>
              )}
            </div>
          </div>
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
    // <div className=" container card mb-3 border border-3 border-success shadow-lg">
    //   <img
    //     src={
    //       imageLinks?.thumbnail ||
    //       "https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467.jpg"
    //     }
    //     className="card-img-top object-cover w-25 mx-auto shadow-lg rounded my-2"
    //     alt="img"
    //   />
    //   <div className="card-body">
    //     <h5 className="card-title">Card title</h5>
    //     <p className="card-text">
    //       This is a wider card with supporting text below as a natural lead-in
    //       to additional content. This content is a little bit longer.
    //     </p>
    //     <p className="card-text">
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </p>
    //   </div>
    // </div>
  );
};

export default Details;
