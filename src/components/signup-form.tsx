'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldSeparator } from "@/components/ui/field"
import { signIn } from "next-auth/react";

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6 mt-20", className)} {...props}>
            <Card className="overflow-hidden p-0 text-white rounded-[24px] border-white/20 bg-[#0f0909]">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                        <FieldGroup>
                            <div className="flex flex-col items-center gap-2 text-center mb-6">
                                <h1 className="text-2xl font-bold">Добро пожаловать | smllyβeta</h1>
                                <p className="text-muted-foreground text-sm text-balance text-white/75">
                                    Авторизуйтесь через сторонние сервисы, чтобы продолжить
                                </p>
                            </div>

                            <Field>
                                <Button
                                    className="w-full hover:scale-95 transition-transform cursor-pointer bg-white text-black hover:bg-white/90"
                                    variant="default"
                                    type="button"
                                    onClick={() => signIn("github", { callbackUrl: "/auth/login" })}>
                                    <img src="/github.svg" className="w-[20px] h-[20px] mr-2 invert" alt="GitHub"/>
                                    Войти через GitHub
                                </Button>
                            </Field>

                            <FieldSeparator className="text-white/40">Или</FieldSeparator>

                            <Field>
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10" type="button" onClick={() => signIn("google", { callbackUrl: "/onboarding" })}>
                                    <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"/>
                                    </svg>
                                    Войти через Google
                                </Button>
                            </Field>

                            <FieldDescription className="text-center mt-4">
                                Уже есть аккаунт? <a href="/auth/login" className="underline hover:text-white">Войти</a>
                            </FieldDescription>
                        </FieldGroup>
                    </div>

                    <div className="bg-muted relative hidden md:block border-l border-white/10">
                        <img
                            src="/furry404.png"
                            alt="Image"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </CardContent>
            </Card>

            <FieldDescription className="px-6 text-center text-white/50">
                Продолжая авторизацию вы подтверждаете, что согласны с <br />
                <a href="#" className="underline">Правилами сообщества</a> и <a href="#" className="underline">Политикой конфиденциальности</a>.
            </FieldDescription>
        </div>
    )
}
