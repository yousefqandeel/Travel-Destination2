import Tour from "./tour/Tour.jsx";
import React from "react";
function Tours(props) {
    return (
        <>
            {
                props.tours.map((data) => {
                    return (
                        <Tour key={data} />
                    )
                })
            }
        </>
    )
};
export default Tours;