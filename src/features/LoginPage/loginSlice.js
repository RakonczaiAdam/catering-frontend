import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url, http_status } from "../../config";

const initialState = {
    userName: "",
    password: "",
    accessToken: "",
    refreshToken: "",
    loginState: "",
    companies: [],
    companyId: 0
}

export const fetchCompanies = createAsyncThunk(
    'companies/', 
    async () =>{
        const companies = await axios.get(`${url.DEV_API_URL}/companies`)
        return companies.data
    }
)

export const userLogin = createAsyncThunk(
    'users/login', 
    async (loginData) =>{
        const response = await axios.post(`${url.DEV_API_URL}/users/login`, loginData)
        return response.data
    }
)

export const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        dataChangeHandler :(state, action)=>{
            switch(action.payload.name){
                case "userName":
                    state.userName = action.payload.value;
                    break;
                case "password": 
                    state.password = action.payload.value;
                    break;
                case "company": 
                    state.companyId = action.payload.value;
                    break;
                default: 
                    console.log("Wrong target name")
            }
        },
        refreshLoginState: (state)=>{
            state.loginState = ""
        }
    },
    extraReducers: {
        [userLogin.pending](state){
            state.loginState = http_status.PENDING
        },
        [userLogin.fulfilled](state, {payload}){
            state.loginState = http_status.FULFILLED
            state.accessToken = payload.accessToken
            state.refreshToken = payload.refreshToken
        },
        [userLogin.rejected](state){
            state.loginState = http_status.REJECTED
        },
        [fetchCompanies.fulfilled](state, {payload}){
            state.companies = payload
        }
    }
})

export const { dataChangeHandler, refreshLoginState } = loginSlice.actions

export default loginSlice.reducer