import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../features/Counter'
import  setNavigationTabBar  from '../features/Tabbar'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    navbar: setNavigationTabBar
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch