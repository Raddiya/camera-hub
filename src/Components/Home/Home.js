import React from 'react';
import Camera from '../image/dslr-camera.jpg'
import { Link } from "react-router-dom";
import useCard from "../Card/Card";
import Review from "../Review/Review";

const Home = () => {
    const [card, setCard] = useCard();
    return (
        <section>
            <div>
                <div>
                    <img src={Camera} alt="Dslr" />
                </div>
                <div>

                </div>
            </div>
            <div>
                <p>Review</p>
                <div className="card-compo">
                    {card.map(
                        (item, index) => index < 3 && <Review product={item}></Review>
                    )}
                </div>
                <div className=" d-flex justify-content-center"><Link className="reviewBtn" to="/review"> See more</Link>
                </div>
            </div>

        </section >
    );
};

export default Home;