import React, { ReactNode } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Icon from "../../assets/icons/icon_24.svg";

export interface ButtonProps {
	kind?: "primary" | "secondary";
	size?: "sm" | "md" | "lg";
	children?: ReactNode;
	hasIcon?: boolean;
	icon?: ReactNode;
	onClick?: () => void;
}

const StyledButton = styled.button((props: ButtonProps) => [
	tw`flex items-center px-8 py-2 transition duration-75 transform rounded-md focus:outline-none`,
	props.kind === "secondary" ? tw`border border-yellow-600` : tw`text-white bg-blue-400`,
	props.size === "sm" && tw`px-4 text-sm`,
	props.size === "lg" && tw`px-12 py-3`,
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