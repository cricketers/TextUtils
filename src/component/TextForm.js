import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

      const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    //  setText("new text");
  return (
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

        <button type="submit" onClick={handleUpClick} className="btn btn-primary">
        Convert to UpperCase
        </button>
      </form>
    </div>
  );
}
