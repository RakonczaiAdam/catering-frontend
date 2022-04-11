import { createSlice } from '@reduxjs/toolkit'
import  axios from "axios"
import { url, http_status } from '../../config'
import { createAsyncThunk } from "@reduxjs/toolkit"

let initialState = {
  usersData: [],
  loadingUserData: null,
}

export const fetchUserData = createAsyncThunk(
    'users/', 
    async (_, {dispatch})=>{
        const userData = await axios.get(`${url.DEV_API_URL}/users`)
        // dispatch(setUsers(userData))
        return userData.data
    }
)

// const userAdapter = createEntityAdapter({
//   selectId: ({id}) => id,
// })

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // setUsers: userAdapter.setMany,
  },
  extraReducers : {// (builder) => {
    // builder
    // .addCase(fetchUserData.pending, (state)=>{
    //   state.loadingUserData = http_status.PENDING;
    // })
    // .addCase(fetchUserData.fulfilled, (state, action)=>{
    //   state.usersData = action.payload;
    //   state.loadingUserData = http_status.FULFILLED;
    // })
    // .addCase(fetchUserData.rejected, (state)=>{
    //   state.loadingUserData = http_status.REJECTED;
    // })
    [fetchUserData.pending](state){
      state.loadingUserData = http_status.PENDING;
    },
    [fetchUserData.fulfilled](state, {payload}){
      state.loadingUserData = http_status.FULFILLED;
      state.usersData = payload;
    },
    [fetchUserData.rejected](state){
      state.loadingUserData = http_status.REJECTED;
    }
  },
})

export const { setUsers } = userSlice.actions

export default userSlice.reducer