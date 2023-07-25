const axios = require("axios");
require("dotenv").config({ path: "../../.env.development" });

const getImage = async (query) => {
  const response = await axios.get(
    "https://www.googleapis.com/customsearch/v1",
    {
      params: {
        key: process.env.GOOGLE_API_KEY,
        cx: process.env.GOOGLE_PROGRAMMABLE_SEARCH_ENGINE_ID,
        q: query,
        searchType: "image",
        num: 1,
      },
    }
  );

  const results = response.data.items;

  if (results && results.length > 0) {
    return results[0].link;
  }

  return null;
};

module.exports = getImage;
