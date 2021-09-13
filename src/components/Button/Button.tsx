import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const ButtonStyled = styled.button((props: ButtonProps) => [
  // The common button styles added with the tw import
  tw`px-8 py-2 duration-75 transform rounded-lg focus:outline-none`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 font-bold)`,

  // Use props to conditionally style your components
  props.kind === "primary" && tw`text-white bg-primary`,

  // Combine regular css with tailwind classes within backticks
  props.kind === "secondary" && [tw`border-2 border-yellow-600`],

  // Conditional props can be used
  props.size === "sm" && tw`px-4 py-1 text-sm`,
  props.size === "lg" && tw`px-12 py-3`,

  // The theme import can supply values from your tailwind.config.js
]);

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
