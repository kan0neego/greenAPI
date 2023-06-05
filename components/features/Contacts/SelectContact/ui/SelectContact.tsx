'use client';
import React, { useRef } from "react";
import { ContactsGrid } from "@/components/entities/User";
import { ContactsRef, Contact } from "@/components/entities/Contacts/model";
import style from './style.module.css'

type Props = {};

export default function Select({}: Props) {
  const activeContact = useRef<HTMLDivElement>();

  const selectContact = (id: string, contactsRef: ContactsRef) => {
    const contactRef = contactsRef[id];
    if (contactRef) {
      activeContact.current?.classList.remove(style.activeCell);
      activeContact.current = contactRef;
      contactRef.classList.add(style.activeCell);
    }
  };

  const handleClick = (contact: Contact, contactsRef: ContactsRef) => {
    selectContact(contact.chatId, contactsRef);
  };

  return <ContactsGrid handleClick={handleClick} />;
}
