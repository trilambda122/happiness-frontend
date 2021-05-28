const https = require('https');
const axios = require('axios')
const url='/users/login'



export default {
  submitLoginCreds: async function (creds) {

    return await axios.post(url, {
        email: creds.email,
        password: creds.password
      });
    // return axios.post("/api/search/", {
    //   search: queryStr,
    // });
  },
};
