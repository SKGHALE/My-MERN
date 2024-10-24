import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleClick = () => {
    //console.log("clicked")
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    //console.log(setText)
  };
  return (
    <div>
      <h5>{props.heading}</h5>
      <div className="mb-3">
        <label htmlFor="exampleTextarea1" className="form-label">
          Your Message
        </label>
        <textarea
          className="form-control"
          id="exampleTextarea1"
          rows="3"
          value={text}
          onChange={handleOnChange}
          aria-describedby="textareaHelp"
        ></textarea>
        <div id="textareaHelp" className="form-text">
          We'll never share your message with anyone else.
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Convert to uppercase
      </button>
    </div>
  );
}
