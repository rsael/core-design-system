import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const ButtonStyled = styled.button<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  padding: 11px 20px;
  line-height: 1;

  ${({ kind }) =>
    kind === "primary"
      ? `color: white;
        background-color: #1ea7fd;`
      : `color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `}

  ${({ size }) =>
    size === "sm" &&
    `font-size: 12px;
    padding: 10px 16px;`}

  ${({ size }) =>
    size === "lg" &&
    `font-size: 16px;
    padding: 12px 24px;`}
`;

/**
 * Primary UI component for user interaction
 */

const Button: React.FC<ButtonProps> = ({
  kind = "primary",
  size = "md",
  children = "Button",
  ...props
}) => {
  return (
    <ButtonStyled kind={kind} size={size} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
