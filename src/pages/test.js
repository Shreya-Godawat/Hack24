import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";

const Test = () => {

  return (
    <div>
      <h2>Welcome </h2>
      <Link
        to={"/category"}
        
      >
        category
      </Link>
    </div>
  );
};
export default Test;