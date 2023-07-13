import React from "react";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const [rating, setRating] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted");
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
    }

    setText("");
  };

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters long...");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };
  return (
    <form className="card" onSubmit={handleSubmit}>
      <h4>Can you please rate our service?</h4>
      <RatingSelect
        select={(rating) => {
          setRating(rating);
        }}
      />
      <div className="input-group">
        <input
          type="text"
          placeholder="write review here"
          onChange={handleTextChange}
          value={text}
        />
        <Button isDisabled={btnDisabled}>Send</Button>
      </div>
      <p>{message && <div>{message}</div>}</p>
    </form>
  );
};

export default FeedbackForm;
