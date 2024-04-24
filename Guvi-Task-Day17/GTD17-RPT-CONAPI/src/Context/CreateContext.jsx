import { createContext, useContext, useState } from "react";

const CartCtx = createContext(null);

// Context Hanling
export default function CartContext({children}) {
    // const [count, setCount] = useState(0);count, setCount, 
    const [grandTotalQty, setGrandTotayQty] = useState(0);
    const [grandTotalAmount, setGrandTotalAmount] = useState(0);
    const [products, setProducts] = useState([])

    return(
        <CartCtx.Provider value={{products, setProducts, grandTotalQty, setGrandTotayQty, grandTotalAmount, setGrandTotalAmount }}>
            {children}
        </CartCtx.Provider>
    )
}

//function returns useContext functionality
export function CartUseContext() {
    return useContext(CartCtx)
}