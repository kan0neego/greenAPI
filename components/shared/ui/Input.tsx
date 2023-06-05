import React, { InputHTMLAttributes, RefObject } from "react";

type Props = {
  innerRef?: RefObject<HTMLInputElement> | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ innerRef, ...props }: Props) {
  return <input ref={innerRef} {...props} />;
}
