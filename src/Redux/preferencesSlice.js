import { createSlice } from '@reduxjs/toolkit'

export const preferencesSlice = createSlice({
    name: "preferences",
    initialState: {
        sideNav: false,
        modalNav: false
    },
    reducers: {
        toggleSideNav: (state) => {
            state.sideNav = !state.sideNav
        },
        toggleModalNav: (state) => {
            state.modalNav = !state.modalNav
        }

    }
})

export const { toggleSideNav, toggleModalNav } = preferencesSlice.actions

export const selectSideNav = (state) => state.preferences.sideNav
export const selectModalNav = (state) => state.preferences.modalNav

export default preferencesSlice.reducer