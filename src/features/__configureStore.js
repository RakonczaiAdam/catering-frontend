import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'
import userReducer from './Users/userSlice'
import companyReducer from './CompanyRegistration/companySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    company: companyReducer,
  },
})