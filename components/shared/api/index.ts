import { axiosInstance } from "./axiosInstance";
import { QuerySendMessage, StateInstance } from "./types";

export const API = {
  sendMessage: async ({ ...attr }: QuerySendMessage) =>
    await axiosInstance.post(`waInstance${attr.id}/sendMessage/${attr.token}`, {
      params: attr.params,
    }),
  getStateInstance: async (id: number, token: string): Promise<StateInstance> =>
    await axiosInstance.get(`waInstance${id}/getStateInstance/${token}`),
};
