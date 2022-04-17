import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'
import userReducer from './Users/userSlice'
import companyReducer from './CompanyRegistration/companySlice'
import loginReducer from './LoginPage/loginSlice'
import storeReducer from './Stores/storeSlice'
import layoutReducer from './Layout/layoutSlice'
import insertDataReducer from './InsertData/insertDataSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    company: companyReducer,
    login: loginReducer,
    store: storeReducer,
    layout: layoutReducer,
    insertData: insertDataReducer
  },
})