import express, { Express } from "express";
import { CONFIG } from "./configs/index.config";
import { rateLimiter } from "./middleware/rateLimiter";
import { rayIdentifier } from "./middleware/rayIdentifier";
import { requestLog } from "./middleware/requestLog";
import { gumbies } from "./routes/gumbies";

const app: Express = express();

/* Universal middleware */
app.use(express.json());
// app.use(cors())
app.use(rateLimiter);
app.use(rayIdentifier);
app.use(requestLog);

/* Routes */
app.use('/gumbies', gumbies);

/* Start server */
app.listen(CONFIG.port, () => console.log(`EXPRESS: Server listening on port ${CONFIG.port}.`));
module.exports = app;