import React from 'react';
import './RatingStarChart.scss';

const RatingStarChart = ({ rating }) => {
    return (
        <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={`star ${i < rating ? "filled" : ""}`}>★</span>
            ))}
        </div>
    );
};

export default RatingStarChart;