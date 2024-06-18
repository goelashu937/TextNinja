import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState, useEffect } from "react";
import Alert from "./Components/Alert";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#042743";
  }, []);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextNinja" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Experience TextNinja...."
                  headingDes="Ultimate Tool for Manipulating text "
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
