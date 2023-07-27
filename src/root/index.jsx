import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/home";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/navbar" element={<Home />} />
        <Route path="/" element={<Navigate to={"/navbar"} />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Root;
