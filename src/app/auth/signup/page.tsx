import { SignupForm } from "@/components/signup-form"
import type {Metadata} from "next";
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
    title: "smlly | Авторизация"
};

export default function SignupPage() {
  return (
      <>
          <Navbar/>
          <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
              <div className="w-full max-w-sm md:max-w-6xl">
                  <SignupForm/>
              </div>
          </div>
      </>
  )
}
