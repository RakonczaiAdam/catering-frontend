import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../requests"

const initialState = {
    stores : null
}

export const fetchStoresById = createAsyncThunk(
    'stores/company',
    async (__, {dispatch})=>{
        const config = {
            headers : { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            }
        }
        const fetchStores = await get("/stores/company", config, dispatch)
        console.log(fetchStores.data)
        return fetchStores.data
    }
)

export const storeSlice = createSlice({
    name: 'storeSlice',
    initialState,
    extraReducers: {
        [fetchStoresById.fulfilled](state, {payload}){
            state.stores = payload
        }
    }
})

export default storeSlice.reducer