import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http_status } from "../../config";
import { post, get, del } from '../../requests'

const initialState = {
    optionValue: "",
    insertStoreChangeData: {
        storeName: "",
        country: "",
        region: "",
        city: "",
        address: "",
        insertState : "",
        fetchState: "",
        deleteState: ""
    },
    stores: [],
}

export const fetchStoresById = createAsyncThunk(
    'insert/stores/company',
    async (__, {dispatch})=>{
        const config = {
            headers : { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            }
        }
        const fetchStores = await get("/stores/company", config, dispatch)
        return fetchStores.data
    }
)

export const createStoreInstance = createAsyncThunk(
    'stores/create',
    async (insertStoreChangeData, {dispatch})=>{
        const config = {
            headers : {
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            },
            body:{
                storeName: insertStoreChangeData.storeName,
                country: insertStoreChangeData.country,
                region: insertStoreChangeData.region,
                city: insertStoreChangeData.city,
                address: insertStoreChangeData.address,
            }
        }
        const store =  await post('/stores/create', config, dispatch)
        return store.data
    }
)

export const deleteStore = createAsyncThunk(
    'stores/company/delete/id',
    async (storeId, {dispatch})=>{
        const config = {
            headers : { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            }
        }
        const fetchStores = await del("/stores/delete/"+storeId, config, dispatch)
        return fetchStores.data
    }
)

export const insertDataSlice = createSlice({
    name: "insertDataSlice",
    initialState,
    reducers:{
        changeOptionValue: (state, action)=>{
            state.optionValue = action.payload
        },
        insertStoreChangeHandler: (state, action)=>{
            switch(action.payload.name){
                case "storeName":
                    state.insertStoreChangeData.storeName = action.payload.value
                    break;
                case "country":
                    state.insertStoreChangeData.country = action.payload.value
                    break;
                case "region":
                    state.insertStoreChangeData.region =action.payload.value
                    break;
                case "city":
                    state.insertStoreChangeData.city = action.payload.value
                    break;
                case "address":
                    state.insertStoreChangeData.address = action.payload.value
                    break;
                default:
                    console.log("Wrong input data")
            }
        }
    },
    extraReducers: {
        [fetchStoresById.pending](state){
            state.insertStoreChangeData.fetchState = http_status.PENDING
        },
        [fetchStoresById.fulfilled](state, {payload}){
            state.stores = payload
            state.insertStoreChangeData.fetchState = http_status.FULFILLED
        },
        [fetchStoresById.rejected](state, {payload}){
            state.insertStoreChangeData.fetchState = http_status.REJECTED
        },
        [createStoreInstance.fulfilled](state){
            state.insertStoreChangeData.insertState = http_status.FULFILLED
        },
        [createStoreInstance.rejected](state){
            state.insertStoreChangeData.insertState = http_status.REJECTED
        },
        [deleteStore.fulfilled](state){
            state.insertStoreChangeData.deleteState = http_status.FULFILLED
        },
        [deleteStore.rejected](state){
            state.insertStoreChangeData.deleteState = http_status.REJECTED
        }
    }
})

export const { changeOptionValue, insertStoreChangeHandler } = insertDataSlice.actions

export default insertDataSlice.reducer