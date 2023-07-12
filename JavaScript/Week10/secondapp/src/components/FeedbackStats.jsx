import React from "react";

const FeedbackStats = ({ feedback }) => {
  // let's calculate the average rating...

  let average =
    feedback.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h3>{feedback.length} Reviews</h3>
      <h3>Average Rating:{average}</h3>
    </div>
  );
};

export default FeedbackStats;
