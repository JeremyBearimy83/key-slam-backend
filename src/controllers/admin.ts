import { Request, Response } from "express";

export const getAdmin = (req: Request, res: Response) => {
  res.send("<h1>Welcome Admin</h1>");
};

export const getNewTest = (req: Request, res: Response) => {
  res.send("Create new typing test here");
};
