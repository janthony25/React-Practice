import reactLogo from "../images/react-logo.png"
import React, {useState} from "react"

function PosSystem(){

    const[orders, setOrders] = useState("")

    const menuItems = [
        {
            name: "Lomi",
            price: 36,
            description: "Lorem epsum Lomi"
        },
        {
            name: "Menudo",
            price: 25,
            description: "Lorem epsum Menudo"
        },
        {
            name: "Laing",
            price: 24,
            description: "Lorem epsum Laing"
        }
    ]

    const handleAddOrder = (item) => {
        const newOrder = {
            name: item.name,
            price: item.price
        }
        setOrders([...orders, newOrder])
    }

    return (
        <div className="d-flex">
            <div className="col-2 border">
                Logo
            </div>
            <div className="col-8 border">
                <h2>Mains</h2>
                <div className="d-flex flex-wrap">
                    {menuItems.map}
                </div>


                <div className="menu-container">
                    <img  src={reactLogo} alt="menu logo" style={{width: "40px"}} />
                    <div className="menu-details d-flex flex-column">
                        <h5>Lomi</h5>
                        <p>Lorem ipsum dolor</p>
                        <span>$ 36</span>
                        <button  className="btn-add-to-order">
                            Add to Order
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-4 border">
                <h4>Order Summary</h4>
            </div>
        </div>
    )
}

export default PosSystem