import React, { useEffect, useState } from "react";

export const useFetch = (apiPath, query = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
  console.log(url);
  useEffect(() => {
    const fetchResults = async function () {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
      } catch (error) {}
    };
    fetchResults();
  }, [url]);

  return { data };
};
