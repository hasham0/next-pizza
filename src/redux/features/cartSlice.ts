import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartStateTS {}

const initialState: CartStateTS = {};

export const counterSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
