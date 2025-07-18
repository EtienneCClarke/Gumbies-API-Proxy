require('dotenv').config();

const CONFIG = {
    url: process.env.GUMBIES_API_URL,
    api_key: process.env.GUMBIES_API_KEY,
};

export { CONFIG }