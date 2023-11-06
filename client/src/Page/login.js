import react, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addNewAccount = () => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3000/api/account/createAccount", { user })
      .then((result) => {
        console.table(result);
        localStorage.setItem(
          "vdata",
          JSON.stringify(result.data.message.email)
        );
      })
      .catch((e) => {
        console.log(e.message);
      });
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
    </div>
  );
};
export default Login;
