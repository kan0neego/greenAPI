import React from "react";
import { AuthForm } from "@/components/features/Authentication";
import style from "./style.module.css";

export const metadata = {
  title: "Hello, GREEN API!",
};

export default function Main() {
  return (
    <main className={style.formBlock}>
      <AuthForm />
    </main>
  );
}
