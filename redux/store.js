import { configureStore } from '@reduxjs/toolkit'
import viewReducer from './createView'

export default configureStore({
  reducer: {
    view: viewReducer
  }
})