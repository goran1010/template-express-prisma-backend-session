const NUMBER_OF_DAYS = 30;
const SECRET = process.env.SECRET;

import expressSession from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import prisma from "../db/prisma.js";

const sessionMiddleware = expressSession({
  cookie: {
    maxAge: NUMBER_OF_DAYS * 24 * 60 * 60 * 1000,
    sameSite: "lax",
    secure: false,
    httpOnly: true,
  },
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  store: new PrismaSessionStore(prisma, {
    checkPeriod: 2 * 60 * 1000,
    dbRecordIdIsSessionId: true,
    dbRecordIdFunction: undefined,
  }),
});

export default sessionMiddleware;
