import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { get } from "@reduxjs/toolkit/node_modules/immer/dist/internal"
import {get} from '../../requests'

const initialState = {
    rooms : []
}

export const fetchRoomsByStore = createAsyncThunk(
    'rooms/store',
    async (store, {dispatch})=>{
        try{
            const config = {
                headers : {
                    'authorization': `Bearer ${window.localStorage.getItem("accessToken")}`
                }
            }
            const rooms = await get('rooms/store/'+store.id, config, dispatch)
            return rooms.data
        }catch(error){
            console.log(error)
        }
    }
)

const tableSlice = createSlice({
    name: 'tableSlice',
    initialState,
    reducers: {

    }
})

export default tableSlice.reducer