import { Router } from "express";

import { createUserController } from "./controllers";

export const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post("/", async (req, res) => {
  const controller = createUserController();

  return controller(req, res);
});
