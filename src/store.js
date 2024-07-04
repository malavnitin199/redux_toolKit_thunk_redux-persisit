import { combineReducers, configureStore } from "@reduxjs/toolkit";
import customerSlice from "./features/customer/customerSlice";
import accountSlice from "./features/accounts/accountSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   // blacklist: ["account"],
// };
const rootReducer = combineReducers({
  customer: persistReducer(
    {
      key: "customer",
      storage,
      blacklist: ["nationalId"],
    },
    customerSlice
  ),
  account: persistReducer(
    {
      key: "account",
      storage,
      blacklist: ["balance"],
    },
    accountSlice
  ),
  // account: accountSlice,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: rootReducer,
});
const persistor = persistStore(store);
export { store, persistor };
