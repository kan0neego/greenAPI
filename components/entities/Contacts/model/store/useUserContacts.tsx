import { create } from "zustand";
import { produce } from "immer";
import { Contact } from "../types";

interface State {
  contacts: Array<Contact>;
}

type Action = {
  setContact: (contact: Contact) => void;
};

export const useUserContacts = create<State & Action>((set) => ({
  contacts: [],
  setContact: (contact) =>
    set(
      produce((state: State) => {
        state.contacts.push(contact);
      })
    ),
}));
