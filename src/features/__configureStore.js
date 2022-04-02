import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'
import userReducer from './User/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
}) 