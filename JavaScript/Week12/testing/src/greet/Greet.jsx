import React from "react";

const Greet = () => {
  return (
    <>
      <h1>The greet form</h1>
      <h2>Enter your name</h2>
      <p data-testid="para">THis is a paragraph</p>
      <div>Hello world</div>
      <form>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name here"
            value="keyin"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <select id="location">
            <option value="">Select a location</option>
            <option value="on">Ontario</option>
            <option value="nl">Newfoundland</option>
            <option value="al">Alberta</option>
            <option value="pe">Prince Edward Island</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Greet;
