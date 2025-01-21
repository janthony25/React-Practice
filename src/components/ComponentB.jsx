import { UserContext } from "./ComponentA"
import ComponentC from "./ComponentC"
import React, {useContext} from "react"


function ComponentB(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentB</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentC />
        </div>
    )
}

export default ComponentB