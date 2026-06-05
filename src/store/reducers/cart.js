import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	items: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add(state, action) => {
			state.items(action.payload)
		}
	}
})

export const { add } = cartSlice.action
export default cartSlice.reducer