require('dotenv').config()

const CONFIG = {
    port: process.env.PORT ?? 3000,
    baseURL: `${process.env.API_URL}:${process.env.PORT || 3000}`,
    clientURL: process.env.CLIENT_URL ?? 'http://localhost:3000',
}

export { CONFIG }