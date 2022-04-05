import React from "react";


const Review = (props) => {
  const { about, name, rating, picture } = props.product;
  return (
    <div className="border border-3 mb-2">
      <div className="text-center">
        <img src={picture} alt="" />
      </div>
      <div className="text-center">
        <h4>Name: {name}</h4>
        <p>{about}</p>
        <p className="fw-bold">Rating:{rating}</p>
      </div>
    </div>
  );
};

export default Review;