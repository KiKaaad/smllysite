'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { finishRegistration } from "@/app/auth/login/action"
import { useSession } from "next-auth/react"
import { useState } from "react"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
    const { update } = useSession()
    const [error, setError] = useState<string | null>(null)
    const [isPending, setIsPending] = useState(false)

    async function handleSubmit(formData: FormData) {
        setIsPending(true)
        setError(null)

        const result = await finishRegistration(formData)

        if (result?.success) {
            await update()
        } else {
            setError(result?.error || "Произошла ошибка")
            setIsPending(false)
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden pt-6 text-white rounded-[24px] border-white/20 bg-[#0f0909]">
                <CardHeader>
                    <CardTitle className="text-2xl">Завершение регистрации</CardTitle>
                    <CardDescription className="text-white/60">
                        Почти готово! Придумайте что нибудь, чтобы вообще понимать кто вы такое
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                    <form action={handleSubmit}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="username">Юзернейм</FieldLabel>
                                <Input
                                    id="username"
                                    name="username"
                                    placeholder="femboy1234"
                                    required
                                />
                                <FieldDescription className="text-white/50 text-xs">
                                    Ваш прекрасный, неверяотный, чудесный юзернейм
                                </FieldDescription>
                            </Field>

                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="name">Имя</FieldLabel>
                                    <Input id="name" name="name" placeholder="Фембой" required />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="lastName">Фамилия</FieldLabel>
                                    <Input id="lastName" name="lastName" placeholder="Фурря" />
                                </Field>
                            </div>

                            <Field className="mt-4">
                                <Button
                                    disabled={isPending}
                                    className="w-full bg-white text-black text-[1.1rem] hover:bg-white/70 cursor-pointer font-semibold py-6 rounded-xl"
                                    type="submit"
                                >
                                    {isPending ? "Сохранение..." : "Завершить регистрацию"}
                                </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
