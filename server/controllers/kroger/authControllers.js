const axios = require("axios");
const base64 = require("base-64");

const client_id = process.env.KROGER_CLIENT_ID;
const kroger_api_url = process.env.KROGER_API_URL;

const requestAuthCode = async () => {
  const params = {
    scope: "product.compact cart.basic:write profile.compact",
    response_type: "code",
    client_id,
    redirect_uri: process.env.KROGER_REDIRECT_URI || "",
  };

  const { data } = await axios.get(
    `${kroger_api_url}/connect/oauth2/authorize`,
    {
      params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return data;
};

module.exports = { requestAuthCode };
