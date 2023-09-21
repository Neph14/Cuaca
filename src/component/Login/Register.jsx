import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import Google from "../../assets/Google-Symbol.png";
import Sky from "../../assets/0.jpg";
import Welcome from "../../UI/Welcome/Welcome";

const Register = (event) => {
  const [checkPassword, setCheckPassword] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    // (e) = (event)
    e.preventDefault();
    console.log(e);
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.number.value);
    console.log(e.target.password.value);

    if (
      e.target.name.value.trim().length >= 2 &&
      e.target.email.value.includes("@") &&
      e.target.number.value !== "" &&
      e.target.password.value.trim().length >= 6
    ) {
      setCheckPassword(false);
      // localStorage.setItem("name", e.target.name.value);
      // localStorage.setItem("email", e.target.email.value);
      // localStorage.setItem("number", e.target.number.value);
      // localStorage.setItem("password", e.target.password.value);
      // localStorage.setItem("isLogin", "1");
      // window.location.reload();
    } else if (e.target.name.value.trim().length < 2) {
      alert("Nama Tidak Valid");
      // } else if (e.target.email.value.notIncludes("@")) {
      //   alert("Email Tidak Valid");
    } else if (e.target.number.value === "") {
      alert("Nomor Tidak Valid");
    } else if (e.target.password.value.trim().length < 6) {
      alert("Password Tidak Valid");
    } else {
      setCheckPassword(true);
      alert("Password Tidak Valid");
    }

    // if (e.target.email.value.includes("@")) {
    //   alert("your email valid");
    // } else {
    //   alert("your email is not valid");
    // }
  };

  const loginHandler1 = () => {
    navigate("/login");
  };

  return (
    <Fragment>
      <div className="flex min-h-fit items-center ">
        <div className=" w-1/2 p-8 min-[320px]:w-full ">
          <Welcome />
          <form
            onSubmit={submitHandler}
            className="flex flex-col justify-center items-center gap-4"
          >
            <button className=" rounded-none mt-7 py-2 px-3 w-80 border flex justify-center gap-2 text-black hover:text-white border-black hover:border-white bg-white hover:bg-black">
              <img width="30" height="20" src={Google} alt="" />
              Continue with Google
            </button>
            <h3>or</h3>
            <input
              className="appearance-none border rounded w-80 py-2 px-3 text-grey-darker border-black "
              // id="name"
              type="name"
              placeholder="Name"
              name="name"
            />
            <input
              className="appearance-none border rounded w-80 py-2 px-3 text-grey-darker border-black "
              // id="email"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="appearance-none border rounded w-80 py-2 px-3 text-grey-darker border-black "
              id="phone"
              type="phone"
              placeholder="Phone Number"
              name="number"
            />
            <input
              className={`appearance-none border rounded w-80 py-2 px-3 text-grey-darker ${
                !checkPassword ? "bg-amber-400" : "bg-red-500"
              }bg-transparent border-black`}
              // id="password"
              type="password"
              placeholder="Password"
              name="password"
            />
            <button
              className=" rounded-none mt-2 py-2 px-3 w-80 border border-black text-black hover:bg-black hover:text-white hover:border-white"
              type="submit"
            >
              Create Account
            </button>
            <div className="flex justify-around items-center gap-2 ">
              <input className="h-10 py-3" type="checkbox" name="" id="" />
              <h4>Remember me for 30 days</h4>
            </div>
            {/* <h4>
              <a href="" className="font-bold">
                Forgot Password
              </a>
            </h4> */}
            <h4>
              You already have account?
              <span> </span>
              <button
                onClick={loginHandler1}
                className="text-black hover:text-gray-500 duration-500"
              >
                Log in
              </button>
            </h4>
          </form>
        </div>
        <div className="object-contain w-full h-auto min-[320px]:hidden sm:hidden lg:block ">
          <img src={Sky} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
