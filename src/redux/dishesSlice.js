import { createSlice } from '@reduxjs/toolkit'

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: 'ЗАКУСКИ'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }
})

export const getSelectedCategory = state => state.dishes.selectedCategory
export const { filterCategory } = dishesSlice.actions
export default dishesSlice.reducer