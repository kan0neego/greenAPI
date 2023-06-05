import React, { DOMAttributes } from "react";
import { Input } from "@/components/shared";
import style from "./styles/style.module.css";

export default function Form({ onSubmit }: DOMAttributes<HTMLFormElement>) {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <Input placeholder="ID" name="IdInstance" />
      <Input placeholder="Token" name="ApiTokenInstance" />
      <input className={style.submitButton} type="submit" />
    </form>
  );
}
