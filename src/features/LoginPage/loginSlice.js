import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url, http_status, validation_errors } from "../../config";

const initialState = {
    userName: "",
    password: "",
    loginState: "",
    companies: [],
    companyId: 0,
    validate: ""
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

// Don't use the requests.js file, to prevent infinite reference error
export const refreshToken = createAsyncThunk(
    'users/token',
    async ()=>{
        const config = {
            token: window.localStorage.getItem("refreshToken")
        }
        const accessToken = await axios.post(`${url.DEV_API_URL}/users/token`, config)
        return accessToken.data
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
        validateEmptyFields: (state)=>{
            if(state.userName==="" || 
                state.password==="" ||
                state.company=== 0
            ){
                state.validate = validation_errors.EMPTY_FIELD
            }else{
                state.validate = validation_errors.VALID
            }
        },
        refreshLoginState: (state)=>{
            state.loginState = ""
            state.userName = ""
            state.companyId = 0
            state.password = ""
            state.validate = ""
        }
    },
    extraReducers: {
        [userLogin.pending](state){
            state.loginState = http_status.PENDING
        },
        [userLogin.fulfilled](state, {payload}){
            state.loginState = http_status.FULFILLED
            state.validate = validation_errors.VALID
            console.log("fulfilled most "+state.loginState)
            window.localStorage.setItem("accessToken", payload.accessToken)
            window.localStorage.setItem("refreshToken", payload.refreshToken)
        },
        [userLogin.rejected](state){
            state.validate = validation_errors.LOGIN_ERROR
            state.loginState = http_status.REJECTED
        },
        [fetchCompanies.fulfilled](state, {payload}){
            state.companies = payload
        },
        [refreshToken.fulfilled](state, {payload}){
            window.localStorage.setItem("accessToken", payload.accessToken)
        }
    }
})

export const { dataChangeHandler, refreshLoginState, validateEmptyFields } = loginSlice.actions

export default loginSlice.reducer