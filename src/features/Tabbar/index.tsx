import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
      showTabBar: boolean,
}

const initialState: CounterState = {
      showTabBar: false,
}

export const setNavigationTabBar = createSlice({
  name: 'Tabbar',
  initialState,
  reducers: {
    setTabBar: (state, action) => {
      state.showTabBar = action.payload
    }
  },
})

export const { setTabBar } = setNavigationTabBar.actions

export default setNavigationTabBar.reducer