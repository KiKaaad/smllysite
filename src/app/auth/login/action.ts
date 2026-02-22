'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "@/entities/session/auth"
import prisma from "@/lib/prisma"
import { Prisma } from "@prisma/client"

export async function finishRegistration(formData: FormData) {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        return { error: "Вы не авторизованы через GitHub" }
    }

    const username = formData.get("username") as string
    const name = formData.get("name") as string
    const lastName = formData.get("lastName") as string

    try {
        await prisma.user.update({
            where: { email: session.user.email },
            data: {
                username: username.trim().replace('@', ''),
                name: name.trim(),
                lastName: lastName?.trim() || null,
                isOnboarded: true,
            },
        })
        return { success: true }
    } catch (error: unknown) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return { error: "Этот юзернейм уже занят" }
            }
        }

        console.error("OnBoarding error:", error)
        return { error: "Не удалось сохранить данные" }
    }
}
