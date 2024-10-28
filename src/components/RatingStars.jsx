import React from 'react';

const RatingStars = ({ rating }) => {
    const roundedRating = Math.round(rating);
    const stars = Array(5)
        .fill(0)
        .map((_, index) => (
            <span key={index} style={{ color: index < roundedRating ? '#ffc107' : '#e4e5e9' }}>★</span>
        ));

    return <div>{stars}</div>;
};

export default RatingStars;
