import { useState } from "react";
import axios from "axios";
import serverURL from "../serverURL";
import { ToastContainer, toast } from "react-toastify";
import logo from "../Images/icon.png";
import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);

  const clear = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
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
        .then(() => {
          toast.success("Welcome");
          setStatus("Login");
          clear();
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        });
    } else {
      toast.warning("All inputs are required!!!");
    }
  };
  const login = () => {
    const user = {
      email: email,
      password: password,
    };
    axios
      .post(serverURL.accountURL + "/login", { user })
      .then(() => {
        toast.success("Welcome");
        clear();
      })
      .catch((e) => {
        console.table(e);
        toast.error(e.response.data.message);
      });
  };

  return (
    <div>
      {status === "Login" ? (
        <div className="loginRegisterPanel">
          <img className="logo" src={logo} />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Email"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={showPassword ? "text" : "password"}
            className="form-control "
            placeholder="Password"
            aria-label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="checkbox"
            class="form-check-input mt-2"
            onChange={() => setShowPassword((d) => !d)}
          />
          <label class="mt-1 ps-2 text-white">Show Password</label>
          <div>
            <input
              type="submit"
              onClick={login}
              className="btn btn-secondary rounded-start-pill mt-3  w-50 p-2 "
            />
            <input
              type="submit"
              value="Register"
              onClick={() => setStatus("Register")}
              className="btn btn-secondary rounded-end-pill  mt-3  w-50 p-2 "
            />
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div className="loginRegisterPanel">
          <img className="logo" src={logo} />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="FirstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="LastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <input
              type="submit"
              onClick={addNewAccount}
              className="btn btn-secondary rounded-start-pill mt-3  w-50 p-2 "
            />
            <input
              type="submit"
              value="Login"
              onClick={() => setStatus("Login")}
              className="btn btn-secondary rounded-end-pill  mt-3  w-50 p-2 "
            />
          </div>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};
export default Login;
