import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RegisterUserState {
      userId: string,
      email: string,
      country: string,
}

const initialState: RegisterUserState = {
    userId: "",
    email: "",
    country: "",
}

export const setRegisterUserState = createSlice({
  name: 'Tabbar',
  initialState,
  reducers: {
    setRegisteruser: (state, action) => {
      state.userId = action.payload.userId,
      state.email = action.payload.email,
      state.country = action.payload.country
    }
  },
})

export const { setRegisteruser } = setRegisterUserState.actions

export default setRegisterUserState.reducer