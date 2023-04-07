import React, { useRef } from 'react';
import { useState} from 'react';
function TextForm(props) {
    const [text,setText] = useState("");
    const textAreaElement = useRef(null);

    function handleChange(event) {
        setText(event.target.value)
    }
    function handleUpperCase() {
        let newText = text.toUpperCase() ;
         setText(newText);
    }
    function handleLowerCase() {
        let newText = text.toLowerCase();
        setText(newText);
    } 
    function clearText(){
        setText("");
    } 
    function handleCopyText(){
       // console.log(textAreaElement.current.value);
       navigator.clipboard.writeText(textAreaElement.current.value);
       // console.log(navigator.clipboard.readText()); // to read the text from clip board

    }
    function handleExtraSpaces(){
       let textValues =  textAreaElement.current.value;
       //console.log(textValues);
       let refinedText = textValues.replace(/\s+/g, ' ').trim();
       //console.log(refinedText);
       setText(refinedText);
    }
    // const [myStyle, setMyStyle] = useState({
    //     // default light mode
    //     color: "black",
    //     backgroundColor: "white",
    // });
    // if(props.mode === "dark"){
    //     setMyStyle({
    //         color : "white",
    //         backgroundColor:"black"
    //     })
    // }
    // else{
    //     setMyStyle({
    //         color : "black",
    //         backgroundColor:"white"
    //     })
    // }
    return (
       <>
            <div style={props.mode === "dark" ? {  backgroundColor :"black" }:{backgroundColor :"white" }} 
            className="container my-3">
                <h1 className={`text-${props.mode === `dark` ? `white` : `dark`}`} >Enter Text</h1>
                    <form>
                    <div className="form-group">
                        {/* <label htmlFor="exampleFormControlTextarea1">Example textarea</label> */}
                        <textarea
                         ref={textAreaElement} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1 text-area-big" rows="8" value={text}
                         style={props.mode === "dark" ? {  backgroundColor :"black",color:"white" }:{backgroundColor :"white",color:"black" }} 
                         ></textarea>
                    </div>
                </form>
                <button onClick={handleUpperCase} type='button' className='btn btn-primary my-3 mx-3' >Convert to upper case</button>
                <button onClick={handleLowerCase} className='btn btn-primary my-2 mx-3' >Convert to lower case</button>
                <button onClick={clearText} className='btn btn-primary my-3 mx-2' >Clear text</button>
                <button onClick={handleCopyText} className='btn btn-primary my-2 mx-3' >Copy text</button>
                <button onClick={handleExtraSpaces} className='btn btn-primary my-2 mx-3' >Remove Extra spaces</button>
                
            </div>
            <div className={`container preview-text text-${props.mode === `dark` ? `white` : `dark`}`}>
                 <h1  >Text summary!</h1>
                 <p>{text.split(" ").length} words and {text.length} characters </p>
                 <p>{0.005 *text.split(" ").length } minutes read</p>
                 <h2>Preview</h2>
                 <p>
                    {text.length > 0 ? text : "Enter text above to preview" }
                 </p>
            </div>
        </>
    )
}

export default TextForm;