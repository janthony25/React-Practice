import React, {useState} from 'react'
import PropTypes from "prop-types"
import "../counter.css"

function Counter() {
    
    const[counter, setCounter] = useState(0)
    
    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const decrementCounter = () => {
        setCounter("asd")
    }

    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <>
            <div className="container text-center">
                <h3>Counter App</h3>
                <div className="counter-container ">
                    <h1>{counter}</h1>
                    <div className="counter-action">
                        <button onClick={incrementCounter}>Increment</button>
                        <button onClick={resetCounter} className='ms-2'>Reset</button>
                        <button onClick={decrementCounter} className='ms-2'>Decrement</button>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}



export default Counter