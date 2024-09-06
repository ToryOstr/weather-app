import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import styles from "./search.module.css";
import { geoApiOptions } from "../../../API.js";
// eslint-disable-next-line react/prop-types
export default function Search({ onSearchChange }) {
  const [search, setSerch] = useState(null);

  const geo_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  // const RapidAPI_Key = process.env.REACT_APP_RapidAPI_Key;

  // const geoApiOptions = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": RapidAPI_Key,
  //     "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  //   },
  // };
  async function loadOptions(inputValue) {
    try {
      const response = await fetch(
        `${geo_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const data = await response.json();
      console.log(data);
      
      return {
        options: data.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })),
      };
    } catch (error) {
      console.error(error);
      return {
        options: [], 
      };
    }
  }

  function handleInputOnChange(searchData) {
    setSerch(searchData);
    onSearchChange(searchData);
  }

  return (
    <div className={styles.searchContainer}>
      <AsyncPaginate
        className={styles.customSelect}
        placeholder="Search for city"
        debounceTimeout={1000}
        value={search}
        onChange={handleInputOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}
