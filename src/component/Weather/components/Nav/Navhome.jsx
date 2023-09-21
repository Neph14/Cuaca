import React, { useState, Fragment } from "react";
// import { BrowserRouter as Router, useHistory } from "react-router-dom";

const Navhome = () => {
  // const history = useHistory();

  let Links = [
    { name: "Weather", link: "/weather" },
    { name: "Region", link: "/region" },
  ];
  let [open, setOpen] = useState(false);

  // const loginHandler = () => {
  //   history.push("/login");
  // };

  return (
    <Fragment>
      {/* <Router> */}
      <div className="shadow-md w-full fixed top-0 left-0 right-0 ">
        <div className="md:flex items-center justify-between bg-blue-600 py-4 md:px-10 px-7 text-white">
          <a href="#" class="flex items-center">
            <p>Logo</p>
          </a>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer bg-black md:hidden "
          >
            <span className="text-gray-200">
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </span>
          </div>
          <div>
            <ul
              className={`md:flex   md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="md:ml-8 text-sm md:my-0 my-7 w-1/2 text-center"
                >
                  <a
                    href={link.link}
                    className="text-white hover:text-black duration-500 px-7 "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* </Router> */}
    </Fragment>
  );
};

export default Navhome;
