import { configureStore } from '@reduxjs/toolkit'
import preferencesReducer from './preferencesSlice'

export default configureStore({
    reducer: {
        preferences: preferencesReducer,
    }
})