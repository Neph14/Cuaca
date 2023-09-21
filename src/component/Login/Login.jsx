import React, { Fragment, useState } from "react";

import Sun from "../../assets/42.jpg";
import Welcome from "../../UI/Welcome/Welcome";
import { useNavigate } from "react-router-dom";

const Login = (props, event) => {
  const [emailEntered, setEmailEntered] = useState("");
  const [passEntered, setPassEntered] = useState("");

  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const navigate = useNavigate();

  const signUpHandler = (e) => {
    // localStorage.clear();
    navigate("/register");
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();

    if (email === emailEntered && password === passEntered) {
      window.location.reload();
      localStorage.setItem("isLogin", "2");
    } else {
      alert("Email atau Password yang anda tidak valid!");
    }
  };

  const emailInputHandler = (e) => {
    setEmailEntered(e.target.value);
  };

  const passInputHandler = (e) => {
    setPassEntered(e.target.value);
  };

  return (
    <Fragment>
      <div
        // class="bg-auto bg-no-repeat bg-center"
        className="flex min-h-fit  items-center "
      >
        <div className=" w-1/2 p-8 min-[320px]:w-full  ">
          <Welcome />
          <form
            onSubmit={loginSubmitHandler}
            action=""
            className="flex flex-col justify-center items-center gap-4"
          >
            <input
              onChange={emailInputHandler}
              value={emailEntered}
              class="appearance-none border rounded w-80 py-2 px-3 text-grey-darker border-black mt-8 "
              id="email"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={passInputHandler}
              value={passEntered}
              class="appearance-none border rounded w-80 py-2 px-3 text-grey-darker border-black "
              id="password"
              type="password"
              placeholder="Password"
            />
            <button
              className=" rounded mt-2 py-2 px-3 w-80 border border-black text-black hover:bg-black hover:text-white  "
              type="submit"
            >
              Log In
            </button>
            <div className="flex justify-around items-center gap-2 ">
              <input className="h-10 py-3" type="checkbox" name="" id="" />
              <h4>Remember me for 30 days</h4>
            </div>
            <h4>
              <a
                href=""
                className="underline text-black hover:text-gray-500 duration-500"
              >
                Forgot Password
              </a>
            </h4>
            <h4>
              You do not have account yet?
              <span> </span>
              <button
                onClick={signUpHandler}
                className="text-black hover:text-gray-500 duration-500"
              >
                Sign in
              </button>
            </h4>
          </form>
        </div>
        <div className="w-full h-screen min-[320px]:hidden sm:hidden lg:block ">
          <img className="object-cover h-screen" src={Sun} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
