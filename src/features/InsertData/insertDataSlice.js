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
        deleteState: "",
    },
    insertUserChangeData: {
        userName: "",
        password: "",
        isAdmin: false,
        insertState: "",
        fetchState: "",
        deleteState: "",
    },
    insertItemChangeData: {
        itemName: "",
        price: 0,
        store: null, // Ha üreset adnak meg akkor minden store-ra legyen
        logicalPrinter: 0,
        vat: 0,
        stock: 0,
        unit: "",
        insertState : "",
        fetchState: "",
        deleteState: "",
    },
    insertUserStoreChangeData: {
        user: null,
        store: null,
        insertState : "",
        fetchState: "",
        deleteState: "",
    },
    stores: [],
    users: [],
    items: [],
    userStores: [],
}

// USER STORE REQUESTS

export const createUserStoreInstance = createAsyncThunk(
    'userStore/create',
    async (insertUserStoreChangeData, {dispatch})=>{
        const config = {
            headers : {
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            },
            body:{
                user: insertUserStoreChangeData.user,
                store: insertUserStoreChangeData.store,
            }
        }
        try{
            const userStore =  await post('/userStores/create', config, dispatch)
            return userStore.data
        }catch(error){
            console.log("ERROR TYPE"+error.response)
        }
    }
)

export const fetchUserStoreByCompany = createAsyncThunk(
    'userStore/company',
    async (__, {dispatch})=>{
        const config = {
            headers : { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            }
        }
        const userStores = await get("/userStores/company", config, dispatch)
        return userStores.data
    }
)

export const deleteUserStore = createAsyncThunk(
    'userStore/delete/id',
    async (userStoreId, {dispatch})=>{
        const config = {
            headers : { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            }
        }
        const deleteUserStore = await del("/userStores/delete/"+userStoreId, config, dispatch)
        return deleteUserStore.data
    }
)

// ITEM REQUESTS

export const createItemInstance = createAsyncThunk(
    'items/create',
    async (insertItemChangeData, {dispatch})=>{
        const config = {
            headers : {
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            },
            body:{
                itemName: insertItemChangeData.itemName,
                price: insertItemChangeData.price,
                store: insertItemChangeData.store,
                logicalPrinter: null,
                vat: null,
                stock: insertItemChangeData.stock,
                unit: insertItemChangeData.unit
            }
        }
        try{
            const item =  await post('/items/create', config, dispatch)
            return item.data
        }catch(error){
            console.log("ERROR TYPE"+error.response)
        }
    }
)

export const fetchItemByCompany = createAsyncThunk(
    'items/company',
    async (__, {dispatch})=>{
        const config = {
            headers : { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            }
        }
        const fetchItems = await get("/items/company", config, dispatch)
        return fetchItems.data
    }
)

export const deleteItem = createAsyncThunk(
    'items/delete/id',
    async (itemId, {dispatch})=>{
        const config = {
            headers : { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            }
        }
        const deleteItem = await del("/items/delete/"+itemId, config, dispatch)
        return deleteItem.data
    }
)

// USER REQUESTS

export const fetchUsersByCompany = createAsyncThunk(
    'users/company',
    async (__, {dispatch})=>{
        const config = {
            headers : { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            }
        }
        const fetchUsers = await get("/users/company", config, dispatch)
        return fetchUsers.data
    }
)

export const createUserInstance = createAsyncThunk(
    'users/create',
    async (insertUserChangeData, {dispatch})=>{
        const config = {
            headers : {
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            },
            body:{
                userName: insertUserChangeData.userName,
                password: insertUserChangeData.password,
                isAdmin: insertUserChangeData.isAdmin
            }
        }
        try{
            const user =  await post('/users/registration', config, dispatch)
            return user.data
        }catch(error){
            console.log("ERROR TYPE"+error.response)
        }
    }
)

export const deleteUser = createAsyncThunk(
    'users/delete/id',
    async (userId, {dispatch})=>{
        const config = {
            headers : { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            }
        }
        const deleteUser = await del("/users/delete/"+userId, config, dispatch)
        return deleteUser.data
    }
)

// STORE REQUESTS
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
    'stores/delete/id',
    async (storeId, {dispatch})=>{
        const config = {
            headers : { 
                'Content-Type': 'application/json',
                'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
            }
        }
        const deleteStores = await del("/stores/delete/"+storeId, config, dispatch)
        return deleteStores.data
    }
)

export const insertDataSlice = createSlice({
    name: "insertDataSlice",
    initialState,
    reducers:{
        changeOptionValue: (state, action)=>{
            state.optionValue = action.payload
            // state.insertUserChangeData.isAdmin = false
            state.insertUserChangeData = initialState.insertUserChangeData
            state.insertStoreChangeData = initialState.insertStoreChangeData
            state.insertItemChangeData = initialState.insertItemChangeData
            state.insertUserStoreChangeData = initialState.insertUserStoreChangeData
        },
        insertUserStoreChangeHandler: (state, action)=>{
            switch(action.payload.name){
                case "user":
                    state.insertUserStoreChangeData.user = action.payload.value
                    break;
                case "store":
                    state.insertUserStoreChangeData.store =action.payload.value
                    break;
                default: 
                    console.log("Wrong input data")
                }
        },
        insertItemChangeHandler: (state, action)=>{
            switch(action.payload.name){
                case "itemName":
                    state.insertItemChangeData.itemName = action.payload.value
                    break;
                case "price":
                    state.insertItemChangeData.price = parseInt(action.payload.value)
                    break;
                case "store":
                    state.insertItemChangeData.store =action.payload.value
                    break;
                case "logicalPrinter":
                    state.insertItemChangeData.logicalPrinter = action.payload.value
                    break;
                case "vat":
                    state.insertItemChangeData.vat = action.payload.value
                    break;
                case "stock":
                    state.insertItemChangeData.stock = parseInt(action.payload.value)
                    break;
                case "unit":
                    state.insertItemChangeData.unit = action.payload.value
                    break;
                default:
                    console.log("Wrong input data")
            }
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
        },
        insertUsersChangeHandler: (state, {payload})=>{
            switch(payload.name){
                case "userName":
                    state.insertUserChangeData.userName = payload.value
                    break;
                case "password":
                    state.insertUserChangeData.password = payload.value
                    break;
                case "isAdmin":
                    state.insertUserChangeData.isAdmin = !state.insertUserChangeData.isAdmin
                    break;
                default:
                    console.log("Wrong target name")
            }
        }
    },
    extraReducers: {
        // FETCH
        // stores
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
        // users
        [fetchUsersByCompany.pending](state){
            state.insertUserChangeData.fetchState = http_status.PENDING
        },
        [fetchUsersByCompany.fulfilled](state, {payload}){
            state.users = payload
            state.insertUserChangeData.fetchState = http_status.FULFILLED
        },
        [fetchUsersByCompany.rejected](state, {payload}){
            state.insertUserChangeData.fetchState = http_status.REJECTED
        },
        // items
        [fetchItemByCompany.pending](state){
            state.insertItemChangeData.fetchState = http_status.PENDING
        },
        [fetchItemByCompany.fulfilled](state, {payload}){
            state.items = payload
            state.insertItemChangeData.fetchState = http_status.FULFILLED
        },
        [fetchItemByCompany.rejected](state, {payload}){
            state.insertItemChangeData.fetchState = http_status.REJECTED
        },
        // userStore 
        [fetchUserStoreByCompany.pending](state){
            state.insertUserStoreChangeData.fetchState = http_status.PENDING
        },
        [fetchUserStoreByCompany.fulfilled](state, {payload}){
            state.userStores = payload
            state.insertUserStoreChangeData.fetchState = http_status.FULFILLED
        },
        [fetchUserStoreByCompany.rejected](state, {payload}){
            state.insertUserStoreChangeData.fetchState = http_status.REJECTED
        },
        // INSERT 
        // stores
        [createStoreInstance.fulfilled](state){
            state.insertStoreChangeData.insertState = http_status.FULFILLED
        },
        [createStoreInstance.rejected](state){
            state.insertStoreChangeData.insertState = http_status.REJECTED
        },
        // users 
        [createUserInstance.pending](state){
            state.insertUserChangeData.insertState = http_status.PENDING
        },
        [createUserInstance.fulfilled](state, payload){
            state.insertUserChangeData.insertState = http_status.FULFILLED
        },
        [createUserInstance.rejected](state){
            state.insertUserChangeData.insertState = http_status.REJECTED
        },
        // items
        [createItemInstance.fulfilled](state){
            state.insertItemChangeData.insertState = http_status.FULFILLED
        },
        [createItemInstance.rejected](state){
            state.insertItemChangeData.insertState = http_status.REJECTED
        },
        // userStore
        [createUserStoreInstance.fulfilled](state){
            state.insertUserStoreChangeData.insertState = http_status.FULFILLED
        },
        [createUserStoreInstance.rejected](state){
            state.insertUserStoreChangeData.insertState = http_status.REJECTED
        },
        // DELETE
        // stores
        [deleteStore.fulfilled](state){
            state.insertStoreChangeData.deleteState = http_status.FULFILLED
        },
        [deleteStore.rejected](state){
            state.insertStoreChangeData.deleteState = http_status.REJECTED
        },
        // users
        [deleteUser.pending](state){
            state.insertUserChangeData.deleteState = http_status.PENDING
        },
        [deleteUser.fulfilled](state){
            state.insertUserChangeData.deleteState = http_status.FULFILLED
        },
        [deleteUser.rejected](state){
            state.insertUserChangeData.deleteState = http_status.REJECTED
        },
        // items
        [deleteItem.fulfilled](state){
            state.insertItemChangeData.deleteState = http_status.FULFILLED
        },
        [deleteItem.rejected](state){
            state.insertItemChangeData.deleteState = http_status.REJECTED
        },
        // userStore 
        [deleteUserStore.fulfilled](state){
            state.insertUserStoreChangeData.deleteState = http_status.FULFILLED
        },
        [deleteUserStore.rejected](state){
            state.insertUserStoreChangeData.deleteState = http_status.REJECTED
        },
    }
})

export const { changeOptionValue, insertStoreChangeHandler, insertUsersChangeHandler, insertItemChangeHandler, insertUserStoreChangeHandler } = insertDataSlice.actions

export default insertDataSlice.reducer