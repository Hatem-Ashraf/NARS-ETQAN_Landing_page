import React from "react";

function MenuItem({ image, name, price, target }) {
  const handleClick = () => {
    // Redirect to http://localhost:3000 when the div is clicked
    window.location.href = target;
  };

  return (
    <div className="menuItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price} </p>
    </div>
  );
}

export default MenuItem;
