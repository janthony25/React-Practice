function Button(){
    // const name = "Anthony"

    // const handleClick = () => console.log("The button has been clicked");
    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }
    //     else {
    //         console.log(`${name} stop clicking me`)
    //     }
    // }
    // const handleClick2 = (name) => console.log(`${name} stop clicking!`)
    const handleClick = (e) => e.target.textContent = "Ouch!"
    return(
        // <button onClick={handleClick}>Click me 😀</button>
        // <button onClick={() => handleClick(name)}>Click me 😀</button> 
        <button onClick={(e) => handleClick(e)}>Click me 😀</button> 
    )
}

export default Button