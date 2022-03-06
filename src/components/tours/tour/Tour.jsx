import React from "react";
import { Link } from "react-router-dom";
function Tour(data) {
    return (
        <>  <p>{data.name}</p>
            <Link to={`city/${data.id}`}>
                <img src={data.image} alt="" />
            </Link>
        </>
    )
};

export default Tour;
