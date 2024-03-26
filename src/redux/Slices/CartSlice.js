import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartSlice',
    initialState:[],
    reducers:{
        //function to add item to cart
        addToCart:(state,action)=>{
            state.push(action.payload)

        },

          //function to remove item from cart

          removeFromCart :(state,action)=>{
        return   state.filter((item)=>item.id!=action.payload)

          },

          //functon to empty cart
          emptyCart:(state)=>{
           return state=[]
          }
    }
})

export const {addToCart,removeFromCart,emptyCart}=cartSlice.actions

export default cartSlice.reducer