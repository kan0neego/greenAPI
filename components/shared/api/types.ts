export type UserData = {
  id: number;
  token: string;
};

export type SendMessage = {
  params: {
    chatId: string;
    message: string;
  };
};

export type StateInstance = {
  stateInstance:
    | "notAuthorized"
    | "authorized"
    | "blocked"
    | "sleepMode"
    | "starting";
};

export type QuerySendMessage = UserData & SendMessage;