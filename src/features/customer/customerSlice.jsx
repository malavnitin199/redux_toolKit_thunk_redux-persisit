import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(username, nationalId) {
        return { payload: { username, nationalId } };
      },
      reducer(state, action) {
        state.fullName = action.payload.username;
        state.nationalId = action.payload.nationalId;
      },
    },
  },
});
export const { createCustomer } = customerSlice.actions;
export default customerSlice.reducer;
