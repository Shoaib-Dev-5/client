import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'viewModel',
  initialState: {
    view: 'signup',
    
  },
  reducers: {
    login: (state) => {
      state.view ='login'
    },
    signup: (state) => {
      state.view= 'signup'
    },
  }
})

export const { login, signup,} = counterSlice.actions

export default counterSlice.reducer