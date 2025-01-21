import { useEffect, useReducer, useRef, useState } from "react"

function RefComponent(){

    const inputRef = useRef(null);
    const passwordRef = useRef("Password");


    useEffect(() => {
        console.log("Component Rendered");
    })

    function handleClick(){
        if (passwordRef.current === ""){
            passwordRef.current.style.backgroundColor = "red";
        }
        else {
            console.log("Successfull");
        }
        
    }

    return (
        <>
            <button onClick={handleClick}>Click me!</button>
            <input ref={inputRef} type="text" />
            <input ref={passwordRef}  type="text" />
        </>
    )

}

export default RefComponent