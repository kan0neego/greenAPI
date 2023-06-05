import { object, number } from "yup";

export const phoneSchema = object({
  phone: number()
    .min(11, "Некорретно введен номер")
    .max(11, "Некорретно введен номер")
    .required(),
});
