import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import AllBooks from "../pages/AllBooks";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Search from "../pages/Search";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/allbooks" element={<AllBooks />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default AppRouter;
