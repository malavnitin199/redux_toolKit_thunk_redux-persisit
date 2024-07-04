import CreateCustomer from "./features/customer/CreateCustomer";
import Customer from "./features/customer/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const { fullName } = useSelector((store) => store.customer);
  return (
    <div>
      {!fullName ? (
        <>
          <h1>🏦 The React-Redux Bank ⚛️</h1>
          <CreateCustomer />
        </>
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
