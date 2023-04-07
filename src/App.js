//import logo from './logo.svg';
import React,{ useState } from 'react';
// import { Routes,Route } from "react-router-dom";
// components
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = function(message,type){
      setAlert({
        msg:message,
        type : type
      })
  }
  function handleMode(){
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode enabled","success");
      //document.title = "React App - Dark mode";
      document.body.style.backgroundColor = "black";
    }else{
      setMode("light");
      showAlert("light mode enabled","success");
      //document.title = "React App - light mode";
      document.body.style.backgroundColor = "white";

    }
  }
  return (
    <>
      <Navbar handleMode={handleMode} title="TextUtils" link1="Home" link2="About" mode={mode} />
        {/* <Routes> */}
           <h5 style={{color:`${mode === `dark` ? `white` : `black`}`}} className='text-center my-3' >Hi My name is Satyanarayan! Hope u enjoy this app.</h5>
           {/* <Route path='/' element={<TextForm showAlert={showAlert} mode={mode} />} /> */}
           <TextForm  mode={mode} />
           {/* <Route path='/' element={<TextForm showAlert={showAlert} mode={mode} />} /> */}
           {/* <About mode={mode}  /> */}
        {/* </Routes> */}
      <Alert alert={alert}/>
      {/* <TextForm showAlert={showAlert} mode={mode} /> */}
      
    </>
  );
}

export default App;
