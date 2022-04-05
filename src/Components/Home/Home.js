import React from 'react';
import Camera from '../image/dslr-camera.jpg'
import { Link } from "react-router-dom";
import useCard from "../Card/Card";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
    const [card, setCard] = useCard();
    return (
        <section>
            <div className='row container mt-4 align-items-center'>
                <div className='camera col-lg-5 col-md-4' >
                    <img className='img-fluid' src={Camera} alt="Dslr" />
                </div>
                 <div className='col-lg-7 col-md-8'>
                An ideal travel camera is lightweight, versatile, and captures great images. Point-and-shoots are the smallest and least expensive option, but they have some limitations in terms of image quality. Mirrorless interchangeable-lens cameras have big...
                </div>
            </div>
            <hr></hr>
            <div>               
                <h4>Coustomer review(3)</h4>
                <div className="card">
                    {card.map(
                        (item, index) => index < 3 && <Review key={index} product={item}></Review>
                    )}
                </div>
                <Link className="bg-primary text-white p-2 mb-2" to="/review"> See more</Link>            
            </div>

        </section >
    );
};

export default Home;