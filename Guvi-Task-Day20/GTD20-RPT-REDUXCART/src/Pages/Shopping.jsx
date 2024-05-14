import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom"

// Landing Shopping cart page just button
export default function ShoppingPage() {
    const navigate = useNavigate();
    return (
        <>  
            <h2>Welcome to ShoppingCart</h2>
            <div className="gotocart">
                <button className="gotoCartBtn" onClick={() => navigate("/cart")}>
                    <ShoppingCartIcon className="icon shopcarticon"/>
                    Go To Cart
                </button>
            </div>
        </>
    )
}