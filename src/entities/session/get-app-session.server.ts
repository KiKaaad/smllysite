"use server";

import { getServerSession } from "next-auth";
import { nextAuthConfig } from "@/entities/session/next-auth-config";

export const getAppSessionServer = () => getServerSession(nextAuthConfig);