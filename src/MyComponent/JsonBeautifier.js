import React, { useState } from 'react'

const JsonBeautifier = () => {
    const [json, setJson] = useState("");

    const setJsonText = () => {
        setJson(json);
    }

    const clearTextArea = () => {
        setJson("")
    }

    const jsonBeautify = () => {

        try {
            
            if (JSON.parse(json)) {
    
                // let updatesJson = JSON.stringify(json);
    
                document.getElementById("afterBeautifiedText").value = JSON.parse(json);
            } else {
                alert('Please provide valid string')
            }
        } catch (error) {
            alert('Please provide valid string')
            clearTextArea();
        }
    }

    return (
        <div className="container">
            <h3>JSON Beautifier</h3>
            <div >


                <form action="">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={json} onChange={(e) => setJson(e.target.value)} ></textarea>
                    <button className="my-3 btn btn-dark" type="button" onClick={jsonBeautify}>JSON to Stirng</button>
                    <button className="my-3 m-3 btn btn-dark" type="button" onClick={jsonBeautify}>Beautify</button>
                    <button className="my-3 m-3 btn btn-dark" type="button" onClick={clearTextArea} >Clear text</button>

                    <textarea id="afterBeautifiedText" className="form-control" rows="3" value="" ></textarea>
                    <button className="my-3 btn btn-dark" type="button" >Copy JSON</button>
                </form>
            </div>
        </div>
    )
}

export default JsonBeautifier
