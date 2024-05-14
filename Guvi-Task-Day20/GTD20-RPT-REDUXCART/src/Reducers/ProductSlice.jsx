import { createSlice } from "@reduxjs/toolkit";

const productSchema = {
    productsArr : []
};

const productSlice = createSlice({
    name : "product",
    initialState : productSchema,
    reducers : {
        setproducts : (state, action) => {
            // console.log(action);
            state.productsArr = action.payload.productArr
        }
    }
});


export const { setproducts } = productSlice.actions;
export default productSlice.reducer;
