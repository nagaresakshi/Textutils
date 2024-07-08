
import React, { useState } from "react";


export default function Textarea(props) {
  const [text,setText]=useState("enter text here")
  const handaledupcase=()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showAlert(" Converted to uppercase","sucess");
  }
  const handaledlocase=()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert(" Converted to lowercase","sucess");
  }
  const handaledremove=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert(" Remove all speces from text","sucess");
  }
  const handaledclear=()=>{
    let newtext=(" ");
    setText(newtext)
    props.showAlert(" Text was clear write new text","sucess");
  }
  const handaledcopy=()=>{
    let text=document.getElementById("comment");
    text.select();
    //text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copied","sucess");
  }
  const handaled=(event)=>{
    console.log("text change");
    setText(event.target.value)
  } 
  return (
    <>
    <div className="container mx-auto sm:w-full" style={{color:props.mode==="black"?"white":"black"}}>
      <h1 className="text-4xl font-extrabold dark:text-white my-5">{props.heading}</h1>
      <div className="max-w-md container">
        <textarea className="form-control" style={{backgroundColor:props.mode==="black"?"#042743":"white"}} value={text} id="comment" rows={10} cols={100} onChange={handaled}/>
      </div>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-700" onClick={handaledupcase}>ToUpperCase</button>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-700" onClick={handaledlocase}>ToLowerCase</button>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-700" onClick={handaledremove}>Remove Spaces</button>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-700" onClick={handaledclear}>Clear Text</button>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-700" onClick={handaledcopy}>Copy Text</button>

    </div>
    <div className="container mx-auto" style={{color:props.mode==="black"?"white":"black"}}>
    <h2 className="text-4xl font-extrabold dark:text-white my-3">Your Text Summary</h2>
    <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words <b>{text.length}</b> characters are present</p>
    <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} </b>Minutes to read </p>
    <h3 className="text-3xl font-sans dark:text-white py-3">Preview</h3>
    <p>{text.length>0?text:"enter something to preview it here"}</p>
    </div>
    </>
  );
}

