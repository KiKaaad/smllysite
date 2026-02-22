"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/entities/session/auth";

export const getAppSessionServer = () => getServerSession(authOptions);