import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "Success");
    };

      const handleLoClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
         props.showAlert("Converted to Lowercase", "Success");
    };

    const handleclearClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText ='';
        setText(newText);
    };
      const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value);
         props.showAlert("Word is Change", "Success");
    };

    const handleCopy = () =>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
       props.showAlert("This text is Copy", "Success");
    };

    const handleExtraSpaces = () => {
    let newText = text.split(/\s+/);
      setText(newText.join(" "));
    };

    const [text, setText] = useState('Enter text here');
    //  setText("new text");
  return (
    <>
    <div className='container'       style={{
    color: props.mode === 'dark' ? 'white' : 'black'
  }}>
      <h1>{props.heading}  </h1>

      <form>
        <div className="mb-3">
          {/* <label htmlFor="myBox" className="form-label">
            Example textarea
          </label> */}
          <textarea
            className="form-control"
            value={text}
            style={{
    backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black'
  }}
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
         <button type="submit" onClick={handleclearClick} className="btn btn-primary mx-2">
       Clear All
        </button>
         <button type="submit" onClick={handleCopy} className="btn btn-primary mx-2">
       Copy Text
        </button>
         <button type="submit" onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">
       Remove Spaces
        </button>
      </form>
    </div>
    <div className="container" style={{
    color: props.mode === 'dark' ? 'white' : 'black'
  }}>
        <h1> Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above preview it here"}</p>
    </div>
    </>
  );
}
