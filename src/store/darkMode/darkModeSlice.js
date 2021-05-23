import {createSlice} from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        isDarkMode: false,
    },
    reducers: {
        toggleDarkMode: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isDarkMode = !state.isDarkMode
        },

    },

})

// Action creators are generated for each case reducer function
export const {toggleDarkMode} = darkModeSlice.actions;

// we can also select the values that we are using in the state as listed below

export const selectIsDarkMode = (state) => state.darkMode.isDarkMode


export default darkModeSlice.reducer;