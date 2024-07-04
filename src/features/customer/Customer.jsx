import { useSelector } from "react-redux";

function Customer() {
  const { fullName } = useSelector((store) => store.customer);
  const { balance } = useSelector((store) => store.account);
  return (
    <>
      {fullName && <h2>👋 Welcome, {fullName}</h2>}
      <h2>Your Current Balance is : ${balance} </h2>
    </>
  );
}

export default Customer;
