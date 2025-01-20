import { useEffect, useState } from "react"

function WIndowComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event removed")
        }
    }, [])

    useEffect(() => {
        document.title = `window: ${width} x ${height}`
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth) ;
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </>
    )
}

export default WIndowComponent