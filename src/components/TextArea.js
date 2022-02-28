import { useState } from "react"

export default function TextArea(props) {
    const [text, setText] = useState('');

    const handleUpClick = (props) => {
        // console.log("Up Cick was Used!"); 
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = (props) => {
        // console.log("Up Cick was Used!"); 
        let newText = text.toLowerCase();
        setText(newText)
    }
 
    const handleOnChange = (event) => {
        setText(event.target.value);     
        // console.log("On Change Triggered");   
    }

    return (
        <>
        <div className="container my-2">
            <div className="my-3">
                <h2>{props.heading}</h2>
                <textarea placeholder="Enter Text Here..." className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Magic-U ✨</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Magic-L ✨</button>
        </div>
        <div className="container">
            <h4 class="my-3">Your Text Summary</h4>
            <p> {text.split(" ").length-1} words and, {text.length} characters. </p>
            <p>{0.008*(text.split(" ").length - 1)} minutes Time Read.</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}

// 2.5