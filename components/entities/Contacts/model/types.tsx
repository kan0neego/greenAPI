export type Contact = {
  name: string;
  chatId: string;
};

export type ContactsRef = {
  [key: string]: HTMLDivElement | null;
};

export type SelectContact = {
  handleClick: (contact: Contact, contactsRef: ContactsRef) => void;
};
