import { combineReducers, configureStore } from "@reduxjs/toolkit";
import customerSlice from "./features/customer/customerSlice";
import accountSlice from "./features/accounts/accountSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  customer: customerSlice,
  account: accountSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export { store, persistor };
