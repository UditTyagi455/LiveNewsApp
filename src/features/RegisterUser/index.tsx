import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RegisterUserState {
      email: string,
      password: string,
      country: string,
      topics: string[],
      author: string[],
}

const initialState: RegisterUserState = {
    email: "",
    password: "",
    country: "",
    topics: [],
    author: [],
}

export const setRegisterUserState = createSlice({
  name: 'Tabbar',
  initialState,
  reducers: {
    setRegisteruser: (state, action) => {
      state.email = action.payload.email,
      state.password = action.payload.password,
      state.country = action.payload.country,
      state.topics = action.payload.topics,
      state.author = action.payload.author
    }
  },
})

export const { setRegisteruser } = setRegisterUserState.actions

export default setRegisterUserState.reducer