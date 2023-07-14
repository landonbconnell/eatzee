const axios = require("axios");
const base64 = require("base-64");
require("dotenv").config({ path: `../../.env` });

const client_id = process.env.KROGER_CLIENT_ID;
const client_secret = process.env.KROGER_CLIENT_SECRET;
const kroger_api_url = process.env.KROGER_API_URL;

const requestAccessToken = async (req, res, next) => {
  try {
    const { data } = await axios.post(
      `${kroger_api_url}/connect/oauth2/token`,
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${base64.encode(
            client_id + ":" + client_secret
          )}`,
        },
      }
    );

    const accessToken = data.access_token;

    res.cookie("kroger_access_token", accessToken, {
      httpOnly: true,
      sameSite: "strict", // protection against CSRF
      secure: process.env.NODE_ENV !== "development", // use HTTPS in production
      maxAge: 3600000, // cookie expiration time
    });

    res.json({ msg: "Access token retrieved" });
  } catch (err) {
    next(err);
  }
};

const requestAuthCode = async () => {
  const params = {
    scope: "product.compact",
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

module.exports = { requestAccessToken, requestAuthCode };
