import React, { useState } from "react";
import credbevyLogo from "./credbevyLogo.png";
import eye from "./eye.png";
import eyeSlash from "./eyeSlash.png";
import { useNavigate } from "react-router-dom";
// import Icon from "react-icons-kit";
// import { basic_eye } from "react-icons-kit/linea/basic_eye";
// import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
// import { SecurityIconClose } from "../icons/Icon";
import "./login.css";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [type, setType] = useState("password");

  const navigate = useNavigate();

  const handleValidate = (e) => {
    e.preventDefault();
    if (user === "reactjs12@gmail.com" && pass === "love") {
      navigate("/dashboard");
    } else if (user === 123456 && pass === "love") {
      navigate("/dashboard");
    } else {
      alert("Wrong Credentials, please try again");
    }
  };

  return (
    <div className="login">
      <div className="relative container mx-auto p-6 mt-6">
        <img
          src={credbevyLogo}
          alt="credbevy logo"
          className="absolute credbevy-logo"
        />
      </div>
      <div className="top"></div>
      <div className="container mx-auto flex flex-col justify-center items-center gap-3">
        <div className="text-2xl font-bold leading-6 tracking-[-0.5px] text-center">
          Login
        </div>
        <form onSubmit={handleValidate} className="login-form mt-3">
          <div className="user">
            <input
              type="email"
              value={user}
              className="p-3"
              onChange={(e) => setUser(e.target.value)}
            />
            <label htmlFor="" className="form-label">
              Email/Phone number
            </label>
          </div>
          <div className="user mt-3.5 flex">
            <input
              type={type}
              value={pass}
              className="p-3"
              onChange={(e) => setPass(e.target.value)}
            />
            {type === "password" ? (
              <span className="icon-span" onClick={() => setType("text")}>
                {/* <Icon icon={basic_eye_closed} size={22} /> */}
                <img src={eyeSlash} alt="security" />
              </span>
            ) : (
              <span className="icon-span" onClick={() => setType("password")}>
                {/* <Icon icon={basic_eye} size={22} /> */}
                <img src={eye} alt="security" />
              </span>
            )}
            <label htmlFor="" className="form-label">
              Password
            </label>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button
              style={{
                background:
                  "linear-gradient(90deg, #8003cd 1.22%, #5c00fe 100%)",
              }}
              className="login-button flex justify-center items-center"
              type="submit"
            >
              <p>Login</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
