import React, { ReactNode } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Icon from "../../assets/icons/icon_24.svg";

export interface ButtonProps {
	kind?: "primary" | "secondary" | "outline-primary" | "affirmative" | "negative";
	size?: "sm" | "md" | "lg";
	children?: ReactNode;
	hasIcon?: boolean;
	icon?: ReactNode;
	onClick?: () => void;
}

const StyledButton = styled.button(({ kind, size }: ButtonProps) => [
	tw`flex items-center px-6 py-2 rounded-lg appearance-none focus:outline-none`,
	kind === "primary" && tw`text-white bg-primary hover:bg-primary-lighter active:bg-primary-darker focus:(ring ring-primary-subtle)`,
	kind === "outline-primary" && tw`text-primary bg-white border border-primary focus:(ring ring-primary-subtle)`,
	kind === "secondary" && tw`border border-gray-200`,
	kind === "affirmative" && tw`text-white bg-green-300 hover:bg-green-200 active:bg-green-400 focus:(ring ring-green-100)`,
	kind === "negative" && tw`text-white bg-red-300 hover:bg-red-200 active:bg-red-400 focus:(ring ring-red-100)`,
	size === "sm" && tw`px-4 text-sm`,
	size === "lg" && tw`px-12 py-3`,
]);

const IconContainer = styled.div(() => [
	tw`flex items-center justify-center mr-2`
]);


const Button = ({ children, hasIcon, icon, ...props }: ButtonProps): JSX.Element => {
	return (
		<StyledButton {...props}>
			{hasIcon &&
				<IconContainer>
					{icon ? icon : <Icon />}
				</IconContainer>
			}
			{children || "Button"}
		</StyledButton>
	);
};

Button.defaultProps = {
	size: "md",
	kind: "primary",
	hasIcon: false
};

export default Button;