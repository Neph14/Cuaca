import React from "react";

import Blue from "../../../../assets/rain-cloud-icon-5.png";

function Weather() {
  return (
    <div className="flex flex-col border-r-4 w-full border-slate-700 justify-center items-center">
      <div className=" bg-white col-span-10 items-center flex flex-col ">
        <p className="text-2xl font-medium pb-3 col">Thu 23 August</p>
        <img src={Blue} className="w-auto h-20" alt=""></img>
        <p className="text-xl">Moderate or heavy</p>
      </div>
    </div>
  );
}

export default Weather;
