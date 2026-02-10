import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../api";
import { IoClose } from "react-icons/io5";
function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "b@b.com",
    password: "p123",
  });
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);
  const [showPopup, setShowPopup] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    setShowPopup(true);
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextPath = location.state?.path || "/host";
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate(nextPath, { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });
  }
  return (
    <>
    {showPopup && (
      <div className="popup">
        <button className="popup-close" onClick={() => setShowPopup(false)}>
          <IoClose size={20} />
        </button>
        <p>Signup feature in progress, please log in to the existing account below.</p>
      </div>
    )}
    <div className="login-container">
      {location.state?.message && (
        <h3 style={{ color: "red" }}>{location.state?.message || ""}</h3>
      )}
      {error?.message && <h3 style={{ color: "red" }}>{error.message}</h3>}
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {" "}
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
    </>
  );
}

export default Login;
