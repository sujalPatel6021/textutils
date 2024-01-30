import React ,{useState} from 'react'

export default function TextFile(props) {
    const HandleOnChange = (event) => {
        // console.log('onChange');
        setArea(event.target.value);
    }

    const HandleUpClick =  () => {
        // console.log('Clicked');
        let ChangeUpCase = text.toUpperCase();
        setArea(ChangeUpCase);
        props.showAlert("Converted to Upper Case","success")
    }

    const HandleClearClick =  () => {
        // console.log('Clicked');
        setArea("");
        props.showAlert("Text Cleared","success")
    }

    const HandleDownClick =  () => {
        // console.log('Clicked');
        let ChangeUpCase = text.toLowerCase();
        setArea(ChangeUpCase);
        props.showAlert("Converted to Lower Case","success")
    }

    const HandleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
        document.getSelection().removeAllRanges()
    }

    const HandleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setArea(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success")
    }
    
    const [text,setArea] = useState("")
  return (
    <>
    <div style={{ color : props.mode === 'dark'?'white': 'black'}}>
    <div>
        <h2>{props.heading} </h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={HandleOnChange} style={{ backgroundColor : props.mode === 'dark'?'grey': 'white' , color:props.mode === 'dark'?'white': 'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={HandleDownClick}>Convert to Lower Case</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={HandleUpClick}>Convert to Upper Case</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={HandleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={HandleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={HandleRemoveSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p> {text.split(" ").filter((element) => { return element.length !== 0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((element) => { return element.length !== 0}).length + " Minutes"} </p>

        <h2>Preview</h2>
        <p>{text.length>0 ? text: 'Nothing to preview'}</p>
    </div>
    </div>
    </>
  )
}
