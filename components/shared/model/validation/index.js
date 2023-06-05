import { phoneSchema } from "./schema";

export const getValidationSchema = (schema) => ({ phone: phoneSchema }[schema]);
