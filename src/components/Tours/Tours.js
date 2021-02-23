import React from 'react';
import SingleTour from './SingleTour'

const Tours = ({tours}) => {
    console.log(tours)
    return (
        <div>
            this is tour component
            <SingleTour/>
        </div>
    );
};

export default Tours;