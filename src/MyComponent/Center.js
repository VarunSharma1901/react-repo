import React, { useState } from 'react'
import '../CSS/Center.css';
import { copy } from 'stylis';


export default function Center() {

    const [name, setName] = useState("");

    const setUpperCase = (event) => {
        let t = name.toUpperCase();
        setName(t);
    }

    const copyText=()=>{
        try {
            navigator.clipboard.writeText(name);
            alert("Copied to clipboard!");
        } catch (err) {
            console.error(
                "Unable to copy to clipboard.",
                err
            );
            alert("Copy to clipboard failed.");
        }
    }

    const clearTextArea = () => {
        setName("")
    }


    return (
        <div className='container'>
            This is testing form
            <form action="">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={name} onChange={(e) => setName(e.target.value)}></textarea>
                <button className="my-3 btn btn-dark" type="button" onClick={setUpperCase}>Upper Case</button>
                <button className="my-3 m-3 btn btn-dark" type="button" onClick={clearTextArea}>Clear text</button>
                <button className="my-3 m-3 btn btn-dark" type="button" onClick={copyText}>Copy text</button>
            </form>


            <h3>Highlights Points:</h3>
            <p>{name.length} words</p>

        </div>


    )
}


