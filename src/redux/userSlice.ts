import { createSlice } from '@reduxjs/toolkit'
import { User } from '../models/User'

interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state) => {
      state.user = { id: '1', name: 'Joe' }
    },
    signOut: (state) => {
      state.user = null
    },
  },
})

export const { signIn, signOut } = userSlice.actions
export default userSlice.reducer
