import axios from "axios";
import serverURL from "../serverURL";
import { ToastContainer, toast } from "react-toastify";
import "../css/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("Login");

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
      })
      .catch((e) => {
        console.table(e);
        toast.error(e.response.data.message);
      });
  };

  return (
    <div className="body">
      {status === "Login" ? (
        <>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Email"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="form-control bg-dark"
            placeholder="Password"
            aria-label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ToastContainer />
        </>
      ) : (
        <>
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
          <a onClick={() => setStatus("Login")}>Login</a>
          <ToastContainer />
        </>
      )}
    </div>
  );
};
export default Login;
