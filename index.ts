import "dotenv/config";
import express, { Express } from "express";
import api from "./src/routes/api";

const app: Express = express();
const port = process.env.PORT || 3000;

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.listen(port, () => console.log(`Server is running on port ${port}`));
