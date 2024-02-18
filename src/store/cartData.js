import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { useParams } from 'react-router-dom';

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        setCount(state, action) {
            let foundProduct = state.findIndex((a)=>{
                return a.id == action.payload
            })
            state[foundProduct].count++
        },
        addCart(state, action) {
            let newObj = { ...action.payload, count: 1 }
            state.push(newObj)
        }
    }
})

export let { setCount, addCart } = cart.actions

export default cart;