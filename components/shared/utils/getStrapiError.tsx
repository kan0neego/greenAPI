import { ErrorMessageTypes } from "./types";

export const getStrapiError = (err: any): ErrorMessageTypes | undefined => {
  if (!err.response) return;
  const { data, status, statusText } = err.response;

  return {
    status,
    statusText,
    message: data,
  };
};
