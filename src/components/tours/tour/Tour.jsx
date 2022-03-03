import React from 'react';
import Tour from '../tours/tour/Tour.jsx';

function Tours(props) {
    return (
        props.tour.map(data => {
            return (
                <Tour data={data} />
            );

        })
    );
};

export default Tours;
