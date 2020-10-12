import { Request, Response } from "express";

export const getError = (req: Request, res: Response) => {
  res.status(404).render("404", { pageTitle: "404" });
};
