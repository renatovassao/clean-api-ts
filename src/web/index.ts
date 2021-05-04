import { json } from "body-parser";
import express from "express";

import { router } from "./users";

const app = express();

app.use(json());

app.use("/users", router);

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
