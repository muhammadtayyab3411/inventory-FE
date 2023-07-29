import React from "react";
import { useNavigate } from "react-router-dom";

const ViewDetailsButton = ({ value }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // Assuming your product detail page URL is "/product/:id"
    navigate("/home");
  };

  return (
    <a href={value} target="_blank" rel="noopener noreferrer">
      {value}
    </a>
  );
};

export default ViewDetailsButton;
