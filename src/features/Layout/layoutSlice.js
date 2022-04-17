import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from '../../requests'

const initialState = {
    loggedUser : {},
    userCompany: {},
}

export const findLoggedUser = createAsyncThunk(
    'users/getOne', 
    async (__, {dispatch}) => {
        const config = {
            headers : { 'authorization': `Bearer ${window.localStorage.getItem("accessToken")}` }
        }
        const user = await get("/users/getOne", config, dispatch)//axios.get(`${url.DEV_API_URL}/users/getOne`, config)
        return user.data
    }
)

export const findUserCompany = createAsyncThunk(
    'companies/findCompanyByUser', 
    async (__, {dispatch}) => {
        const config = {
            headers : { 'authorization': `Bearer ${window.localStorage.getItem("accessToken")}` }
        }
        const company = await get("/companies/findCompanyByUser", config, dispatch)//axios.get(`${url.DEV_API_URL}/users/getOne`, config)
        return company.data
    }
)

export const layoutSlice = createSlice({
    name: "layoutSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [findLoggedUser.fulfilled](state, {payload}){
            state.loggedUser = payload
        },
        [findUserCompany.fulfilled](state, {payload}){
            state.userCompany = payload
        }
    }
})

// export const {switchInserSubExpand} = layoutSlice.actions

export default layoutSlice.reducer

