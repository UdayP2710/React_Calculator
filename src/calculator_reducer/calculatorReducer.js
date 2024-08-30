import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  number: "",
  operator: null,
  expression: "",
  result: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: INITIAL_STATE,
  reducers: {
    setNumber: (state, action) => {
      state.number += action.payload;
      state.expression += action.payload;
    },
    setOperator: (state, action) => {
      if (state.operator && state.number) {
        // If there's already an operator, calculate the intermediate result
        state.result = performCalculation(state);
      } else {
        state.result = Number(state.number);
      }
      state.operator = action.payload;
      state.expression += action.payload;
      state.number = "";
    },
    calculateResult: (state) => {
      if (state.operator && state.number) {
        state.result = performCalculation(state);
        state.expression = state.result.toString();
        state.number = state.result.toString();
        state.operator = null;
      }
    },
    clear: (state) => {
      state.number = "";
      state.operator = null;
      state.expression = "";
      state.result = 0;
    },
  },
});

const performCalculation = (state) => {
  switch (state.operator) {
    case "+":
      return state.result + Number(state.number);
    case "-":
      return state.result - Number(state.number);
    case "*":
      return state.result * Number(state.number);
    case "/":
      return state.result / Number(state.number);
    default:
      return state.result;
  }
};
export const calculatorReducer = calculatorSlice.reducer;
export const calculatorActions = calculatorSlice.actions;
export const calculatorState = (state) => state.calculatorReducer;
