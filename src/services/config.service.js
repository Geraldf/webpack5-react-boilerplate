import axios from "axios";

export const wconfig = (conf) => {
  axios.post(`http://localhost:4000/api/writeConfig`, { conf }).then((res) => {
    console.log(res);
    console.log(res.data);
    return res;
  });
};
