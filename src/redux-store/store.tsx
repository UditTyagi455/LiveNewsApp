import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../features/Counter'
import  setNavigationTabBar  from '../features/Tabbar'
import setRegisterUserState from '../features/RegisterUser'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    navbar: setNavigationTabBar,
    register: setRegisterUserState
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch