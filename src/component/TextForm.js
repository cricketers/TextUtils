import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

      const handleLoClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

      const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    //  setText("new text");
  return (
    <>
    <div>
      <h1>{props.heading}  </h1>

      <form>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
          ></textarea>
        </div>

        <button type="submit" onClick={handleUpClick} className="btn btn-primary mx-2">
        Convert to UpperCase
        </button>
        <button type="submit" onClick={handleLoClick} className="btn btn-primary mx-2">
        Convert to LowerCase
        </button>
      </form>
    </div>
    <div className="container">
        <h1> Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
