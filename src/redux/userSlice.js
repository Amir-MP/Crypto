import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
  },
  reducers: {
    update: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
