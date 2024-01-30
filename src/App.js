import "./App.css";
import React, { useState } from "react";
import { BrowserRouter,
        Routes,
        Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFile from "./components/TextFile";
import Alerts from "./components/Alerts";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btnMode, setBtnMode] = useState("Enable Dark Mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
      setBtnMode("Enable Dark Mode");
      // document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is Enabled", "success");
      setBtnMode("Enable Light Mode");
      // document.title = "TextUtils - Dark Mode";
    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar
        title=" TextUtils"
        btnMode={btnMode}
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        />
      {/* <Navbar />  */}
      <Alerts alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextFile showAlert={showAlert} heading="Enter your text below" mode={mode}/>}></Route>
          <Route path="/About" element={<About mode={mode} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
