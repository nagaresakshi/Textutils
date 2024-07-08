import { useState } from 'react'
import Navbar from './componants/Navbar'
import Textarea from './componants/Textarea'
import React from 'react';
import Alert from './componants/Alert';
import Abouttext from './componants/Abouttext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [dmode,setMode]=useState("white");
  const [salert,setAlert]=useState(null);
  const showAlert =(msg,type)=>{
    setAlert({
        msg:msg,
        type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode =()=>{
    if(dmode === "white")
      {
        setMode("black");
        document.body.style.backgroundColor="#042743";
        showAlert("this is dark mode","sucess");
        
      }
      else {
        setMode("white");
        document.body.style.backgroundColor="white";
        showAlert("this is light mode","sucess");
        
        
    }
    
    
  }
    
  return (
   
   <Router>
   <Navbar title="textutils!" about="about web" mode={dmode} toggleMode={toggleMode} /> 
   <Alert alert={salert}/>
   <div className='container mx-auto my-3 sm:w-full'>
   <Routes>
      <Route path="/about" element={<Abouttext />} />
      
      <Route path="/" element={<Textarea showAlert={showAlert} heading="Put Text here-on that apply changes" mode={dmode}/>} />
    </Routes>
    
    </div> 
    </Router>
   
  )
}

export default App;
