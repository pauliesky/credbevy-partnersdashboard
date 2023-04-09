import React, { useState } from "react";
import credbevyLogo from "./img/credbevyLogo.png";
import eye from "./img/eye.png";
import eyeSlash from "./img/eyeSlash.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("credbevy@gmail.com");
  const [pass, setPass] = useState("credbevy");

  const [type, setType] = useState("password");

  const navigate = useNavigate();

  const handleValidate = (e) => {
    navigate("/dashboard");
  };

  return (
    <div className="">
      <div className="relative container mx-auto p-6 mt-6">
        <img
          src={credbevyLogo}
          alt="credbevy logo"
          className="w-[184px] h-[34px]"
        />
      </div>

      <form
        action=""
        className="mt-[100px] flex flex-col justify-center items-center"
        onSubmit={handleValidate}
      >
        <h1 className="font-bold text-2xl text-center">Login</h1>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="peer placeholder-transparent mt-[52px] p-3 border border-[#adb5bd] rounded-[5px] w-[350px] h-[60px] outline-none"
            placeholder="email"
          />
          <label
            htmlFor="email"
            className="absolute font-semibold text-xs left-3 top-[56px] peer-placeholder-shown:text-sm peer-placeholder-shown:top-[71px]  peer-focus:top-[56px] peer-focus:text-xs"
          >
            Email/Phone Number
          </label>
        </div>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={type}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="peer placeholder-transparent mt-6 p-3 border border-[#adb5bd] rounded-[5px] w-[350px] h-[60px] outline-none"
            placeholder="password"
          />
          {type === "password" ? (
            <span
              className="absolute top-[42px] left-[306px] cursor-pointer"
              onClick={() => setType("text")}
            >
              <img src={eyeSlash} alt="security" />
            </span>
          ) : (
            <span
              className="absolute top-[42px] left-[306px] cursor-pointer"
              onClick={() => setType("password")}
            >
              <img src={eye} alt="security" />
            </span>
          )}
          <label
            htmlFor="password"
            className="absolute font-semibold text-xs left-3 top-[27px] peer-placeholder-shown:text-sm peer-placeholder-shown:top-[43px] peer-focus:top-[27px] peer-focus:text-xs"
          >
            Password
          </label>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            style={{
              background: "linear-gradient(90deg, #8003cd 1.22%, #5c00fe 100%)",
            }}
            className="flex justify-center items-center text-white w-[327px] h-[58px] px-[160px] py-[21px]"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
