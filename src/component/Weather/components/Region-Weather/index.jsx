import React, { Fragment, useState, useEffect } from "react";

import Cloud from "../../../../assets/White.png";
import Select from "react-select";
import Weather from "../weather";
import GedungSate from "../../../../assets/GedungSate.jpg";
import Monas from "../../../../assets/Monas.jpg";
import API from "../CounterList/API";

function Region() {
  // const [city, setCity] = useState("Bandung");
  const [forecast, setforecast] = useState({});
  const [search, setsearch] = useState("");
  const [currentWeather, setcurrentWeather] = useState({
    suhu: 37,
    kota: "bandung",
    feels_like: 35,
    cuaca: "berawan",
    desc: "sebagian berawan",
    icon: "03d",
    angin: 2,
    humidity: 34,
    negara: "ID",
    lat: -6.9039,
    lon: 107.6186,
  });
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${currentWeather.lat}&lon=${currentWeather.lan}&appid=91a31848ffbbca16fc9452c04d661867`
    )
      .then((res) => res.json())
      .then((result) => {
        setforecast(result);
      });
    console.log(forecast);
  }, [currentWeather]);

  const searchHandler = (e) => {
    console.log(e);
    e.preventDefault();
    if (search !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=15b2a3909985cc3136879bdf5c35b9c7&&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          setcurrentWeather({
            ...currentWeather,
            suhu: result.main.temp,
            kota: result.name,
            feels_like: result.main.feels_like,
            cuaca: result.weather[0].main,
            desc: result.weather[0].description,
            icon: result.weather[0].icon,
            angin: result.wind.speed,
            humidity: result.main.humidity,
            negara: result.sys.country,
            lan: result.coord.lon,
            lan: result.coord.lat,
          });
          console.log(currentWeather);
        });
    }
  };

  return (
    <Fragment>
      <div className="w-full pt-10">
        <div className=" flex  justify-center  items-center ">
          <div className="flex flex-col rounded-lg w-11/12 h-min my-3 overflow-hidden">
            <div className=" w-full h-full flex bg-sky-800 items-center px-3 py-1">
              <h3 className="text-2xl font-bold text-white w-2/3">
                Cawan Cuaca
              </h3>
              {/* <Select
                className="w-1/3 py-3 px-0 md:pr-3"
                options={options}
                onChange={(y) => {
                  setCity(y.value);
                  console.log("ini y: ", y);
                  // console.log(y.value);
                }}
              /> */}
              <input
                type="text"
                onChange={(e) => setsearch(e.target.value)}
                className="w-2/5 rounded px-1"
              />
              <button onClick={searchHandler} />
            </div>
            <div className="flex flex-row bg-sky-700">
              <div className="flex-col gap-10 w-3/5 px-5">
                <div className=" text-white  border-b py-2">
                  <h1 className=" md:text-4xl text-white font-semibold py-1">
                    {currentWeather.kota}
                  </h1>
                  <h1 className="text-sm md:text-lg pt-1">
                    Hari Ini, {currentWeather.tanggal}
                  </h1>
                </div>
                <div className=" text-white  border-b py-2">
                  <h1 className=" text-xl lg:text-4xl ">
                    {currentWeather.suhu} C
                  </h1>
                  <h3 className="text-xl  lg:text-lg py-1">
                    Feels Like {currentWeather.feels_like}
                  </h3>
                  <h3 className="text-lg lg:text-lg flex">
                    <span>
                      <img
                        className="bg-center w-14 h-14"
                        src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`}
                        alt=""
                      />
                    </span>
                    {currentWeather.cuaca} atau {currentWeather.desc}
                  </h3>
                </div>
                <div className=" text-white">
                  <h3 className="text-lg lg:text-lg pt-1">
                    Wind {currentWeather.angin} Km/H
                  </h3>
                  <h3 className="text-lg lg:text-lg py-2">
                    Humadity : {currentWeather.humidity} %
                  </h3>
                </div>
              </div>
              <div className="flex h-80 justify-center w-2/5 bg-sky-900 ">
                <img
                  className="w-full lg:w-1/2 "
                  src={`https://www.countryflagicons.com/FLAT/64/${currentWeather.negara}.png`}
                  alt=""
                />
              </div>
            </div>
            <div className=" h-auto justify-center flex flex-row  ">
              <Weather />
              <Weather />
              <Weather />
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Region;
