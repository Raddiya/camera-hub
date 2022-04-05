import React from "react";
import useCard from "../Card/Card";
import Review from "../Review/Review";
import "./CameraPage.css"

const CameraPage = () => {
  const [card, setCard] = useCard();
  return (
    <div className="container d-flex justify-content-center">
      <div className="card-compo">
        {card.map((item) => (
          <Review product={item}></Review>
        ))}
      </div>
    </div>
  );
};

export default CameraPage;