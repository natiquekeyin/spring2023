import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  // let's calculate the average rating...

  const { feedback } = useContext(FeedbackContext);

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
