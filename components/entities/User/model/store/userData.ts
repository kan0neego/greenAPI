import { create } from "zustand";
import { API } from "@/components/shared";

type State = {
  IdInstance: number;
  ApiTokenInstance: string;
  stateInstance: | "notAuthorized" | "authorized" | "blocked" | "sleepMode" | "starting";
};

type Action = {
  updateUserData: (
    IdInstance: State["IdInstance"],
    ApiToken: State["ApiTokenInstance"]
  ) => void;
};

export const useUserStore = create<State & Action>((set) => ({
  IdInstance: 0,
  ApiTokenInstance: "",
  stateInstance: "notAuthorized",
  updateUserData: (IdInstance, ApiTokenInstance) => {
    API.getStateInstance(IdInstance, ApiTokenInstance).then((res) => {
      set(() => ({
        IdInstance: IdInstance,
        ApiTokenInstance: ApiTokenInstance,
        stateInstance: res.stateInstance,
      }));
    });
  },
}));
