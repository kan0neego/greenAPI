"use client";
import React from "react";
import { ContactInfo } from "@/components/entities/User";
import { useUserContacts } from "@/components/entities/User";
import type { ContactsRef, SelectContact } from "../../model";
import style from "./styles/style.module.css";

export default function ContactsGrid({ handleClick }: SelectContact) {
  const { contacts } = useUserContacts();
  const contactsRef: ContactsRef = {};

  return (
    <>
      {contacts.map((contact) => (
        <div
          ref={(ref) => (contactsRef[contact.chatId] = ref)}
          key={contact.chatId}
          className={`${style.cellWrapper}`}
          onClick={() => handleClick(contact, contactsRef)}
        >
          <div>AVA</div>
          <ContactInfo name={contact.name} />
        </div>
      ))}
    </>
  );
}
