const axios = require('axios');
const base64 = require('base-64');
require('dotenv').config({ path: '../../../.env' });

const client_id = process.env.KROGER_CLIENT_ID;
const client_secret = process.env.KROGER_CLIENT_SECRET;

const requestAccessToken = async () => {
  const { data } = await axios.post(
    'https://api-ce.kroger.com/v1/connect/oauth2/token',
    'grant_type=client_credentials',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64.encode(
          client_id + ':' + client_secret
        )}`,
      },
    }
  );

  return data;
};

const requestAuthCode = async () => {
  const params = {
    scope: 'product.compact',
    response_type: 'code',
    client_id,
    redirect_uri: process.env.KROGER_REDIRECT_URI || '',
  };

  const { data } = await axios.get(
    'https://api-ce.kroger.com/v1/connect/oauth2/authorize',
    {
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return data;
};
