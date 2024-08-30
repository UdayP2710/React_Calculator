import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "./calculator_reducer/calculatorReducer";
export const calculatorStore = configureStore({
  reducer: { calculatorReducer },
});
