import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState:[],
    reducers:{
        //actions
        //1.function to add wish list
         addToWishlist:(state,action)=>{
            state.push(action.payload)

        },
        //2.function to remove from wishlist

        removeFromWishlist: (state,action)=>{

           return state.filter(item=>item.id!=action.payload)

        }
    }
})

export const{addToWishlist,removeFromWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer