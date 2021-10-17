import axios from "axios";

const fetchData = () => {
  return axios.get("https://randomuser.me/api/").then((response) => {
    setCountries(response.data.countries);
  });
};
