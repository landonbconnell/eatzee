const axios = require("axios");
const base64 = require("base-64");

const client_id = process.env.KROGER_CLIENT_ID;
const client_secret = process.env.KROGER_CLIENT_SECRET;
const kroger_api_url = process.env.KROGER_API_URL;
let access_token, expires_in, expireTimer;

const refreshKrogerAccessToken = async () => {
  try {
    const { data } = await axios.post(
      `${kroger_api_url}/connect/oauth2/token`,
      "grant_type=client_credentials&scope=product.compact",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${base64.encode(
            client_id + ":" + client_secret
          )}`,
        },
      }
    );

    access_token = data.access_token;
    expires_in = data.expires_in;

    clearTimeout(expireTimer);
    expireTimer = setTimeout(
      refreshKrogerAccessToken,
      (expires_in - 60) * 1000
    );

    console.log("client_credentials access token retrieved");
  } catch (err) {
    console.log(err);
  }
};

const getAccessToken = () => {
  return access_token;
};

module.exports = { refreshKrogerAccessToken, getAccessToken };
