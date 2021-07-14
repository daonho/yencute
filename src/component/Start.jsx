import React,{useRef} from 'react'

export default function Start({setName}) {
    const inputr= useRef();
    function handleChange(){
        setName(inputr.current.value);
    }
    return (
        <div className = "start">
            <input className="formStart" type="text" placeholder="Enter your name"  
            ref = {inputr} />
            <button className="formStart" onClick={handleChange} >START</button>
        </div>
    )
}
