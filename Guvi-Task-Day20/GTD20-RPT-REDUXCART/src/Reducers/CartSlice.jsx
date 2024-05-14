import { createSlice } from "@reduxjs/toolkit";

// InitialState
const cartSchema = {
    initialQty : 1,
    grandTotalQty : 5,
    grandTotalAmount_mrp : 3476.00,
    grandDiscountedAmount : 528.47,
    grandTotalAmount : 2947.53
}

// CartSlice creation
const cartSlice = createSlice({
    name: "cart",
    initialState: cartSchema,
    reducers : {
        addQty : (state, action) => {
            //console.log(action) // Object { type: "cart/addQty", payload: {…} }
            if (state.initialQty >= 1 ) {
                state.initialQty = state.initialQty + 1;
                state.grandTotalQty = state.grandTotalQty + 1;
                state.grandTotalAmount_mrp = state.grandTotalAmount_mrp + action.payload.mrp_price;
                state.grandDiscountedAmount = state.grandDiscountedAmount + action.payload.discountedAmt;
                state.grandTotalAmount = state.grandTotalAmount + action.payload.itemPriceDiscounted;
            }
        },
        reduceQty : (state, action) => {
            if (state.initialQty >= 1 ) {
                state.initialQty = state.initialQty - 1;
                state.grandTotalQty = state.grandTotalQty - 1;
                state.grandTotalAmount_mrp = state.grandTotalAmount_mrp - action.payload.mrp_price;
                state.grandDiscountedAmount = state.grandDiscountedAmount - action.payload.discountedAmt;
                state.grandTotalAmount = state.grandTotalAmount - action.payload.itemPriceDiscounted;
            }
        }
    }
})

export const  { addQty, reduceQty } = cartSlice.actions;
export default cartSlice.reducer;