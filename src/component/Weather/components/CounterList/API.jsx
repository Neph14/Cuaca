import React, { useState, useEffect, Fragment } from "react";
import Select from "react-select";

function API() {
  const [countries, setcountries] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [selectedRegion, setselectedRegion] = useState(null);

  const options = [
    { value: "Asia", label: "Asia" },
    { value: "americas", label: "Americas" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
    { value: "Africa", label: "Africa" },
  ];

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setcountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const filteredByRegion = selectedRegion
      ? countries.filter(
          (country) =>
            country.region.toLowerCase() === selectedRegion.toLowerCase()
        )
      : countries;

    const filteredBySearchTerm = filteredByRegion.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setfilteredCountries(filteredBySearchTerm);
  }, [selectedRegion, searchTerm, countries]);

  return (
    <Fragment>
      <div className="w-full h-full min-h-screen bg-transparent flex-wrap pt-10">
        <div className="flex justify-between items-center p-5">
          <input
            className="border-2 w-2/5 rounded-md h-full"
            type="text"
            placeholder="Search by country"
            value={searchTerm}
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
          />
          <Select
            className="w-35 rounded-lg w-1/5 h-full text-sm"
            options={options}
            value={options.find((option) => option.value === selectedRegion)}
            onChange={(selectedOption) => {
              setselectedRegion(selectedOption.value);
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 rounded overflow-hidden">
          {filteredCountries.length === 0 ? (
            <div className="text-center w-full h-screen  justify-center grid col-span-4">
              No data found
            </div>
          ) : (
            filteredCountries.map((country, index) => (
              <div
                key={index}
                className="w-11/12 h-4/5 rounded bg-slate-200 shadow-lg mx-3"
              >
                <img
                  className="w-full h-1/2"
                  src={country.flags.png}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 border-t-2">
                  <div className="font-bold text-xl mb-2">
                    {country.name.common}
                  </div>
                  <h3 className="text-gray-700 text-sm">
                    <span className="text-bold">Population</span>:
                    {country.population}
                  </h3>
                  <h3 className="text-gray-700 text-sm">
                    <span className="text-bold">Region</span>:{country.region}
                  </h3>
                  <h3 className="text-gray-700 text-sm">
                    <span className="text-bold">Capital</span>:{country.capital}
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default API;
