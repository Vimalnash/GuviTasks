import { useState } from "react"
import { CartUseContext } from "../Context/CreateContext"
import { StarIcon } from '@heroicons/react/24/solid'


// Creating and Handling CartPage
export default function CartPage() {
    const {products} = CartUseContext();
    
    return (
        <div>
            <h1 className="page-header">React useContext Task - Create Cart</h1>

            <div className="card-container">
                {
                products.map((val, idx) => {
                    return <Card key={idx} val={val} />
                })    
                }
            </div>

            <GrandTotal />

        </div>
    )
}


// Creating and Handling functionalities for Each ItemCard
function Card({val}) {
    const {grandTotalQty, setGrandTotayQty, grandTotalAmount, setGrandTotalAmount} = CartUseContext();
    const [itemQty, setItemQty] = useState(0)
    const [itemStockQty, setItemStockQty] = useState(val.stock)

    const itemPriceDiscounted = (val.price - ((val.price * val.discountPercentage)/100))
    
    // Handling to Increase Quantity for each item
    function addqty(){
        if (itemStockQty > 0) {
            setItemQty(itemQty + 1);
            setItemStockQty(itemStockQty - 1);
            setGrandTotayQty(grandTotalQty + 1);
            setGrandTotalAmount(grandTotalAmount + itemPriceDiscounted)
        }
    }

    // Hanling to Decrease Quantity for each item
    function removeqty(){
        if (itemQty > 0) {
            setItemQty(itemQty - 1);
            setItemStockQty(itemStockQty + 1);
            setGrandTotayQty(grandTotalQty - 1);
            setGrandTotalAmount(grandTotalAmount - itemPriceDiscounted)
        }
    }

    return (
        <div className="card">
            <div className="card-top">
                <img className="card-img" src={val.thumbnail} alt="ProductImage"/>
                <div className="card-item-details">
                    <div className="item-title">{val.title}</div>
                    <div>{val.description}</div>
                    <div className="rating">
                        Rating : {val.rating} <StarIcon className="icon" />

                    </div>
                </div>
                <div className="card-qty-price">
                    <table className="card-qty">
                        <tbody>
                            <tr>
                                <td className="caption">Qty : </td>
                                <td className="value">
                                    <div className="btn-qty">
                                        <button onClick={removeqty}>-</button>
                                        {itemQty}
                                        <button onClick={addqty}>+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="caption">Available Stock: </td>
                                <td className="value">{itemStockQty}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="item-price">
                        <tbody>
                            <tr>
                                <td className="caption">Price : </td>
                                <td className="value">Rs. {val.price}/unit</td>
                            </tr>
                            <tr>
                                <td className="caption">Disc% : </td>
                                <td className="value">{val.discountPercentage}</td>
                            </tr>
                            <tr>
                                <td className="caption">Final Price : </td>
                                <td className="value">Rs. {itemPriceDiscounted.toFixed(2)}/unit</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="card-bottom">
                <div>
                    <span className="caption">Item Total Qty : </span>
                    <span className="value">{itemQty}</span>
                </div>
                <div>
                    <span className="caption">Item Total Price : </span>
                    <span className="value">Rs. {(itemQty*itemPriceDiscounted).toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

// Handling Grand Total view
function GrandTotal() {
    const {grandTotalQty, grandTotalAmount} = CartUseContext();
    return (
        <div className="grandtotalbox">

            <div className="grandtotal">
                <div className="grandtotalheader">
                    Cart Total
                </div>
                <div className="grandtotalcontent">
                    <div>
                        <span className="caption">Total Cart Qty : </span>
                        <span className="value">{grandTotalQty}</span>
                    </div>
                    <div>
                        <span className="caption">Total Cart Amount : </span>
                        <span className="value">Rs. {grandTotalAmount.toFixed(2)}</span>
                    </div>
                    <div>
                        <span className="caption">RoundOff : </span>
                        <span className="value">{(Math.round(grandTotalAmount) - grandTotalAmount).toFixed(2)}</span>
                    </div>
                    <div>
                        <span className="caption">Grand Total Amount to Pay: </span>
                        <span className="value">Rs. {Math.round(grandTotalAmount)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}