// const https = require("https");
const axios = require("axios");
require("dotenv").config();

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR1ZGVAc3NjaGlsbGluZy5jb20iLCJ1c2VySWQiOiI2MDgzMGY0NmM5N2M2MjY2NTg2ZjM5ODAiLCJpYXQiOjE2MjIzOTY4OTAsImV4cCI6MTYyMjQwMDQ5MH0.lhhnJ2ziF8L7CdOtrrGdRYbLQ3dUAgfjSpdZbyFPFPA";

export default {
  submitLoginCreds: async function (creds) {
    const url = "/users/login";
    return await axios.post(url, {
      email: creds.email,
      password: creds.password,
    });
   
  },
  getAllHappies: async function (userId) {
    const url = `/happy/user/${userId}`;
    return await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
      },
    });
  },
  getPhotos: async function (query) {
    const url = `https://api.unsplash.com//search/photos?page=1&per_page=30&query=${query}&orientation=squarish&client_id=M8ICK0TPs2xnl-3-BvfVNtD1ccZ0jVGUlBS_gmnf5MY`;
    return await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
      },
    });
  },

  addRecord: async function (record) {
    const url = "/happy";
    return await axios.post(url, {
      ...record,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  submitSignUpCreds: async function (creds) {
    const url = "/users/signup";
    return await axios.post(url, {
      email: creds.email,
      password: creds.password,
    });
  },
};
