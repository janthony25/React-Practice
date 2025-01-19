import { useState } from "react"

function Crud(){

    const [customers, setCustomers] = useState(["Jun", "Anthony"]);
    const [newCustomer, setNewCustomer] = useState("");

    function handleInputChange(e){
        setNewCustomer(e.target.value)
    }

    function addCustomer(){
        setCustomers(c => [...c, newCustomer])
        setNewCustomer("")
    }

    function deleteCustomer(index){
        const updatedCustomers = customers.filter((_, i) => i !== index)
        setCustomers(updatedCustomers)
    }

    function moveUp(index){
        if (index > 0 ){
            const updatedCustomers = [...customers];
            [updatedCustomers[index], updatedCustomers[index - 1]] = 
            [updatedCustomers[index - 1], updatedCustomers[index]]
            setCustomers(updatedCustomers)
        }
    }


    return(
        <>
        <h1>CRUD</h1>

        <input type="text"
               value={newCustomer}
               placeholder="Enter new customer"
               onChange={handleInputChange}/>
        <button onClick={addCustomer}>Add</button>

        <ol>
            {customers.map((customer, index) => 
            <li key={index}>{customer}
            <button onClick={() => deleteCustomer(index)}>Delete</button>
            <button onClick={() => moveUp(index)}>UP</button>
            </li>)}
        </ol>
        </>
    )
}

export default Crud