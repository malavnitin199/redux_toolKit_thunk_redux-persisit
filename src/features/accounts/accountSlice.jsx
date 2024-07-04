import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addMoney: (state, action) => {
      console.log("addMoney", action.payload);
      state.balance += action.payload;
    },
    withDraw: (state, action) => {
      if (state.balance < action.payload) return;
      state.balance -= action.payload;
    },
    PayLoan: (state) => {
      if (state.balance < state.loan) {
        return;
      }
      state.balance -= state.loan;
      state.loan = "";
      state.loanPurpose = "";
    },
    RequestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        state.balance += action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.loan = action.payload.amount;
      },
    },
  },
});
export const { addMoney, withDraw, PayLoan, RequestLoan } =
  accountSlice.actions;

export function deposite(amount, currency) {
  if (currency == "USD") {
    return { type: "account/addMoney", payload: amount };
  }

  return async function convertingCurrency(dispatch, getstate) {
    const currState = getstate();
    console.log(
      "we are checking for the current amount you hAVING ",
      currState.account.balance
    );

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/addMoney", payload: converted });
  };
}
export default accountSlice.reducer;
