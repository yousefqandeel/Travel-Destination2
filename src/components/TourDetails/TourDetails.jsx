import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const [seeMore, setSeemore] = useState(false);
let seeMoreHandler = () => {
    setSeemore(!seeMore);
}

function TourDetails(props) {
    let { id } = useParams();
    let city = props.filter(city => city.id == id)
    return (
        <>
            <Header></Header>
            <article>
                <div>
                    <h2>{city.name}</h2>
                    <p>
                        {seeMore ? city[0].info : `${city[0].info.slice(0, 100)}...`}
                        <button onClick={() => seeMoreHandler()}>{seeMore ? "See less" : "See more"}</button>
                    </p>
                    <img src={city.img} alt="" />
                </div>
            </article>
            <Footer></Footer>
        </>
    )

};

export default TourDetails;