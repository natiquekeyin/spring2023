import React from "react";
import { useState } from "react";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form>
      <h3>Rate Service</h3>
      <div className="input-group">
        <input
          type="text"
          placeholder="write review here"
          onChange={handleTextChange}
          value={text}
        />
        <button>Send</button>
      </div>
      <p>{message}</p>
    </form>
  );
};

export default FeedbackForm;
