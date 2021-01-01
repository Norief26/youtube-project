import { configureStore } from '@reduxjs/toolkit'
import preferencesReducer from './preferencesSlice'
import userReducer from './userSlice'

export default configureStore({
    reducer: {
        preferences: preferencesReducer,
        user: userReducer
    }
})