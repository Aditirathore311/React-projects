import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

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
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtlis Now';
      // }, 1500);
    } 
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };
  return (
    <>
      {/* {<Navbar title="TextUtlis" aboutText="About TextUtils"/>}  */}
       {/* <Navbar/>  */}
       
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
       
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
         {/* <About/> */}
        </div>
      
        </>
  );
}

export default App;
