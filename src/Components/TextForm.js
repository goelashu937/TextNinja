import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpCLick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoCLick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking.....", "success");
  };

  const handleOnChange = (event) => {
    console.log("handle on change");
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <h3>{props.headingDes}</h3>
        <div className="mb-4 my-4">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpCLick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1 "
          onClick={handleLoCLick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 "
        >
          Speak
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 className="mb-2">Your Text Summary</h2>
        {
          text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length
        }{" "}
        words and {text.length} characters.
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
