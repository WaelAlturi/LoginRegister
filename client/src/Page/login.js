import react, { useState } from "react";
import axios from "axios";
import serverURL from "../serverURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addNewAccount = () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      axios
        .post(serverURL.accountURL + "/createAccount", { user })
        .then((respons) => {
          console.table(respons);
          toast.success("Welcome");
        })
        .catch((e) => {
          toast.error(e.message);
        });
    } else {
      console.log("All inputs are required!!!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="FirstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="LastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" onClick={addNewAccount} />
      <ToastContainer />
    </div>
  );
};
export default Login;
