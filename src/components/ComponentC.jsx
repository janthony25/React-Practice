import ComponentD from "./ComponentD"
import React, {useContext} from "react"
import { UserContext } from "./ComponentA"

function ComponentC(){

    const user = useContext(UserContext)

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h3>{`Enjoy ${user}`}</h3>
            <ComponentD />
        </div>
    )
}

export default ComponentC