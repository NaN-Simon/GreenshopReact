import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/authSlice'
import goodsSlice from './reducers/goodsSlice'
import bannersSlice from './reducers/bannersSlice'
import footerSlice from './reducers/footerSlice'
import blogSlice from './reducers/blogSlice'

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    goodsReducer: goodsSlice,
    bannerReducer: bannersSlice,
    footerReducer: footerSlice,
    blogReducer: blogSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
