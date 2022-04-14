import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../requests"

const initialState = {
    stores : null
}

export const fetchStoresById = createAsyncThunk(
    'stores/company',
    async (__, {dispatch})=>{
        // const config = {
        //     headers : { 
        //         'Content-Type': 'application/json',
        //         'authorization': `Bearer ${accessToken}`
        //     }
        // }
        // const fetchStores = await axios.get(`${url.DEV_API_URL}/stores/company`, config).catch(error =>{
        //     if(error.response?.data.errorType === "TokenExpiredError"){
        //         return error.response.data.errorType
        //     }
        // })
        const config = {
            headers : { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            }
        }
        const fetchStores = get("/stores/company", config, dispatch)
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