import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handlelowClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");

    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);

    }

    const handleCopy = () => {
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText = ("new text"); // Correct way to change the state

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h1 className='mb-4'>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handlelowClick}>Convert To LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleCopy}>CopyText</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>

                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>

                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>

                <h2>Preview</h2>

                <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
            </div>
        </>
    )
}
