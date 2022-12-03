import React from "react";

import BookCard from "../components/BookCard";

const Home = () => {
  return (
    <div className="mt-4 mb-4">
      <>
        <BookCard value={"react"} />
        <BookCard value={"python"} />
        <BookCard value={"django"} />
        <BookCard value={"bootstrap"} />
      </>
    </div>
  );
};

export default Home;
