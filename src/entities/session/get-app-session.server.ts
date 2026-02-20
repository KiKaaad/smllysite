"use server";

import { getServerSession } from "next-auth";
import { auth } from "@/entities/session/auth";

export const getAppSessionServer = () => getServerSession(auth);