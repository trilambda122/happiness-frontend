const https = require("https");
const axios = require("axios");

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR1ZGVAc3NjaGlsbGluZy5jb20iLCJ1c2VySWQiOiI2MDgzMGY0NmM5N2M2MjY2NTg2ZjM5ODAiLCJpYXQiOjE2MjIzOTY4OTAsImV4cCI6MTYyMjQwMDQ5MH0.lhhnJ2ziF8L7CdOtrrGdRYbLQ3dUAgfjSpdZbyFPFPA";

export default {
  submitLoginCreds: async function (creds) {
    const url = "/users/login";
    return await axios.post(url, {
      email: creds.email,
      password: creds.password,
    });
    // return axios.post("/api/search/", {
    //   search: queryStr,
    // });
  },
  getAllHappies: async function () {
    const url = "/happy/";

    return await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
      },
    });
  },
};
