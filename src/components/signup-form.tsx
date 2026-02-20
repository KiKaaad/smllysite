'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import {signIn} from "next-auth/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "smlly | Авторизация"
};

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 mt-20", className)} {...props}>
      <Card className="overflow-hidden p-0 text-white rounded-[24px] border-white/20 bg-[#0f0909]">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Создайте свой аккаунт | smllyβeta</h1>
                <p className="text-muted-foreground text-sm text-balance text-white/75">
                    Данная функция находится в разработке и может работать не стабильно
                </p>
              </div>
                <Field>
                    <FieldLabel htmlFor="name">Имя</FieldLabel>
                    <Input
                        id="name"
                        type="name"
                        placeholder="Фембойчик"
                        required
                    />
                    <FieldDescription className="text-white/75">
                        Ваше отображаемое имя
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="name">Фамилия</FieldLabel>
                    <Input
                        id="name"
                        type="name"
                        placeholder="Фурфуря"
                    />
                    <FieldDescription className="text-white/75">
                        Ваша фамилия (необязательно)
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="username">Имя | @username</FieldLabel>
                    <Input
                        id="username"
                        type="username"
                        placeholder="@femboy1234"
                        required
                    />
                    <FieldDescription className="text-white/75">
                        Вас можно будет найти по @юзернейму. Если конечно вы его укажете (необязательно)
                    </FieldDescription>
                </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="femboy@example.com"
                  required
                />
                <FieldDescription className="text-white/75">
                  Мы не передаем информацию третьим лицам
                </FieldDescription>
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Пароль</FieldLabel>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Повтор пароля
                    </FieldLabel>
                    <Input id="confirm-password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription className="text-white/75">
                  Пароль должен быть не менее 8 символов.
                </FieldDescription>
              </Field>
              <Field>
                <Button className="hover:bg-[#FFFFFF]/75 cursor-pointer" variant="default" type="submit">Создать аккаунт</Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Или используйте сторонние сервисы
              </FieldSeparator>
              <Field className="grid grid-cols-3 gap-4">
                  <Link href="/">
                <Button className="hover:scale-90 cursor-pointer w-full" variant="outline" type="button" onClick={() => signIn()}>
                        <img src="/github.svg" className="w-[20px] h-[20px]"/>
                  <span className="sr-only">Sign up with github</span>
                </Button>
                  </Link>
                <Button variant="outline" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Sign up with Google</span>
                </Button>
              </Field>
              <FieldDescription className="text-center">
                Уже есть аккаунт? <a href="/auth/login">Войти</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/furry404.png"
              alt="Image"
              className="inset-0 w-full object-cover flex flex-col justify-center"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center text-white/50">
        Продолжая авторизацию вы подтверждаете, что согласны с <br /><a href="#">Правилами сообщества</a>{" "}
        и <a href="#">Политика конфиденциальности</a>.
      </FieldDescription>
    </div>
  )
}
