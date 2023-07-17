const axios = require("axios");
const {
  getAccessToken,
} = require("../../services/kroger/refreshKrogerAccessToken");

const getLocations = async (req, res) => {
  const access_token = getAccessToken();
  try {
    const { data } = await axios.get(`${kroger_api_url}/locations`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      params: req.body,
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
};

module.exports = { getLocations };
