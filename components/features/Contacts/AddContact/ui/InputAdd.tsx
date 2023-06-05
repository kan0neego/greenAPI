"use client";
import React, { createRef, useState } from "react";
import { useUserContacts } from "@/components/entities/User";
import { formatPhone } from "@/components/shared/lib";
import { PlusOutlined } from "@ant-design/icons";
import { IMaskInput } from "react-imask/dist/react-imask";
import style from "./styles/style.module.css";

export default function InputAdd() {
  const [inputRef] = useState(createRef<HTMLInputElement>());
  const [setContact] = useUserContacts((state) => [state.setContact]);
  const handleClick = () => {
    const userInput = inputRef.current?.value;
    if (userInput) {
      const phone = formatPhone(userInput);
      const contact = { name: userInput, chatId: phone };
      setContact(contact);
    }
  };

  return (
    <>
      <span className={style.iconWrapper} onClick={handleClick}>
        <PlusOutlined style={{ fontSize: 25, color: "white" }} />
      </span>
      <IMaskInput
        inputRef={inputRef}
        mask={"+{7} (000) 000-00-00"}
        inputMode="tel"
        placeholder="Type a phone number"
      />
    </>
  );
}
