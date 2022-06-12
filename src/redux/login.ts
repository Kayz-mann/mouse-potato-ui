import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserSignInResponse {
  auth: any;
  profile: any;
  refresh_token: string;
  access_token: string;
}

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    user: {
      auth: {
        id: '',
      },
      profile: {
        id: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        role: '',
        image: '',
      },
      refresh_token: '',
      access_token: '',
    },
  },
  reducers: {
    // SignUpProps should be response from signin api call
    setUser(state, action: PayloadAction<UserSignInResponse>) {
      state.user = action.payload;
    },
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser, setIsLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;
