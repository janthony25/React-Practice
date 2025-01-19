import React, {useState} from 'react'

function OnChange(){
    
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0);

    function handleOnChange(e){
        setName(e.target.value)
    }

    function changeQuantity(e) {
        setQuantity(e.target.value)
    }

    function increaseQuantity() {
        setQuantity((previousQuantity) => previousQuantity + 1)
    }
    
    return (
        <div>
            <input value={name} onChange={handleOnChange} type="text" />
            <p>Name: {name}</p>

            {/* <input value={quantity} onChange={changeQuantity} type="number" /> */}
            <button onClick={increaseQuantity}>
                <i value={quantity} className="bi bi-plus-circle-fill"></i>
            </button>
            
            <p>Quantity: {quantity}</p>
        </div>
    )
}

export default OnChange