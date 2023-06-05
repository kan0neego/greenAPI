import React from "react";
import style from "./styles/style.module.css";

type Props = {
  name: string;
};

export default function ContactActivity({ name }: Props) {
  return (
    <div className={style.activityWrapper}>
      <span className={style.title}>{name || "Name"}</span>
    </div>
  );
}
