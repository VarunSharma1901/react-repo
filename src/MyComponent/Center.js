import React, { useState } from 'react'
import '../CSS/Center.css';


export default function Center() {

    const [name, setName] = useState("");

    const setUpperCase = (event) => {
        let t = name.toUpperCase();
        setName(t);
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
            </form>


            <h3>Highlights Points:</h3>
            <p>{name.length} words</p>

        </div>


    )
}


