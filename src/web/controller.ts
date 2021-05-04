import type { Request, Response } from "express";
import type Joi from "joi";

import type { HttpAdapter } from "../presentation";

export type Controller = (req: Request, res: Response) => Promise<Response>;

export function controller<T>(
  joi: Joi.Schema,
  adapter: HttpAdapter<T>
): Controller {
  return async (req, res) => {
    const nu = joi.validate(req.body);

    if (nu.error) {
      return res.status(400).json({ error: nu.error.message });
    }

    const { status, body } = await adapter(nu.value);

    return res.status(status).json(body);
  };
}
