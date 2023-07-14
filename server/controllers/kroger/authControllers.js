const express = require("express");
const router = express.Router();
const qs = require("querystring");

const client_id = process.env.KROGER_CLIENT_ID;
const kroger_api_url = process.env.KROGER_API_URL;

const requestAuthCode = (req, res) => {
  const params = {
    scope: "product.compact cart.basic:write profile.compact",
    response_type: "code",
    client_id,
    redirect_uri: process.env.KROGER_REDIRECT_URI || "",
  };

  const authUrl = `${kroger_api_url}/connect/oauth2/authorize?${qs.stringify(
    params
  )}`;

  res.json({ authUrl });
};

module.exports = { requestAuthCode };
