import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserSignInResponse {
  auth: any;
  business: any;
  profile: any;
  refresh_token: string;
  access_token: string;
}

interface NewToken {
  token: string;
  user_id: string;
}


const appSlice = createSlice({
  name: 'login',
  initialState: {
    newOrders: '0',
  },
  reducers: {
    setNewOrders(state, action: PayloadAction<string>) {
      state.newOrders = action.payload;
    },
  },
});

export const {
  setNewOrders,
} = appSlice.actions;
export default appSlice.reducer;
