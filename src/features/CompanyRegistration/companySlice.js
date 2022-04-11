import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url, validation_errors } from '../../config';

const initialState = {
    companyName: "",
    password: "",
    passwordAgain: "",
    country: "",
    region: "",
    city: "",
    address:"",
    taxNumber: "",
    email: "",
    phoneNumber: "",
    validate: ""
}

export const registerCompany = createAsyncThunk(
    'companies/registration',
    async (companyData)=>{
        const response = await axios.post(`${url.DEV_API_URL}/companies/registration`, companyData)
        return response.data
    }
)

export const companySlice = createSlice({
    name: "companySlice",
    initialState,
    reducers:{
        dataChangeHandler: (state, action)=>{
            switch(action.payload.name){
                case "companyName":
                    state.companyName = action.payload.value
                    break;
                case "password":
                    state.password = action.payload.value
                    break;
                case "passwordAgain":
                    state.passwordAgain = action.payload.value
                    break;
                case "region":
                    state.region = action.payload.value
                    break;
                case "city":
                    state.city = action.payload.value
                    break;
                case "address":
                    state.address = action.payload.value
                    break;
                case "taxNumber":
                    state.taxNumber = action.payload.value
                    break;
                case "email":
                    state.email = action.payload.value
                    break;
                case "country":
                    state.country = action.payload.value
                    break;
                case "phoneNumber":
                    state.phoneNumber = action.payload.value
                    break;
                default:
                    console.log("Wrong target name")
            }
        },
        validatePassword: (state)=>{
            if(state.password !== state.passwordAgain){
                state.validate = validation_errors.PASSWORD_ERROR
            }else{
                state.validate = validation_errors.VALID
            }
        }
    },
    extraReducers: {
        [registerCompany.fulfilled](state){
            state.validate = validation_errors.VALID
        },
        [registerCompany.rejected](state){
            state.validate = validation_errors.UNIQUE_FIELD_CONFLICT
        }
    }
})

export const { dataChangeHandler, validatePassword } = companySlice.actions

export default companySlice.reducer