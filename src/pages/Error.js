import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404: Look like you are lost go back:</h1>
      <Link to="/Resume-builder">Go to Home Page</Link>
    </div>
  )
}

export default ErrorPage;