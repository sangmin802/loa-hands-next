import React, { forwardRef, InputHTMLAttributes } from "react";
import * as Styled from "./index.style";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, IInput>(({ ...props }, ref?) => (
  <Styled.Input ref={ref} {...props} />
));

export default Input;
