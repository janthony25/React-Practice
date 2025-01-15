import React, {useState} from 'react'
import reactLogo from "../images/react-logo.png"

function MyComponent(){
    const [name, setname] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [isLogoVisible, setIsLogoVisible] = useState(false);
    
    const updateName = () => {
        setname("Hello")
    }
    
    const incrementAge = () => {
        setAge(age + 1)
    }

    const decrementAge = () => {
        setAge(age - 1)
    }

    const toggleIsEmployed = () => {
        setIsEmployed(!isEmployed)
    }

    const showLogo = () => {
        setIsLogoVisible(!isLogoVisible)
    }


    return (
        <>
          {isLogoVisible && <img src={reactLogo} alt="react logo" />}
          <button onClick={showLogo}>Show/Hide Profile</button>

          <p>Name: {name}</p>
          <button onClick={updateName}>Set Name</button>

          <p>Age: {age}</p>
          <button onClick={incrementAge}>Increment Age</button>
          <button onClick={decrementAge}>Decrement Age</button>

          <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
          <button onClick={toggleIsEmployed}>Toggle Employment</button>
          
        </>
      
    )
}

export default MyComponent