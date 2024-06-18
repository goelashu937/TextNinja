export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="my-3" style={{ textAlign: "center" }}>
        Welcome to TextNinja
      </h1>
      <p style={{ textAlign: "center" }}>
        Your one-stop solution for all your text
        manipulation needs.
      </p>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <li>
                {" "}
                <strong>Our Vision</strong>{" "}
              </li>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              At TextNinja, we envision a world where text editing is simple,
              quick, and accessible to everyone. We strive to eliminate the
              mundane tasks associated with text manipulation by offering a
              user-friendly platform that saves you time and effort. Our goal is
              to become the go-to tool for anyone who needs to manage and
              transform text, from students and writers to developers and
              everyday users.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <li>
                <strong>Our Features</strong>
              </li>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <ul>
                <strong>
                  TextNinja is equipped with a variety of features that cater
                  to all your text editing requirements:
                </strong>
                <li>
                  Convert to Uppercase/Lowercase: Easily switch your text
                  between uppercase and lowercase with a single click.
                </li>
                <li>
                  Remove Extra Spaces: Clean up your text by removing
                  unnecessary spaces, ensuring it looks neat and professional.{" "}
                </li>
                <li>
                  Clear Text: Start fresh by clearing all text from the input
                  area with ease.
                </li>
                <li>
                  Text-to-Speech: Have your text read aloud, making it easier to
                  review and perfect your content.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <li>
                {" "}
                <strong>Our Commitment</strong>
              </li>
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              We are dedicated to providing an intuitive and efficient text
              editing experience. Our team continuously works on improving
              TextNinja by adding new features and enhancing existing ones
              based on user feedback. We value your input and strive to create a
              tool that truly meets your needs. Join our growing community of
              users and discover how TextNinja can transform the way you
              handle text. With TextNinja, the power of seamless text
              manipulation is at your fingertips. Thank you for choosing us as
              your trusted text editing companion.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
