import { NextFunction, Request, Response } from "express";
import { Secret, verify } from "jsonwebtoken";
import authConfig from "../config/authConfig";

interface ITokenPayload {
  iat: number;
  exp: number;
  id: string;
}

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({err: "JWT Token is missing"});
  }

  try {
    const decodedToken = verify(authHeader, authConfig.jwt.secret as Secret);

    const { id } = decodedToken as ITokenPayload;

    req.user = {
      id: id,
    };

    return next();
  } catch {
    return res.status(400).json({err: "Invalid JWT Token"});
  }
}