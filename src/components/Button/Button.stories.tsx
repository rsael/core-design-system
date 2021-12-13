import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
	title: "Example/Button",
	component: Button,
	argTypes: {
		backgroundColor: { control: "color" },
		onClick: { action: "clicked" },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	kind: "primary",
	children: "Button",
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
	kind: "outline-primary",
	children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
	kind: "secondary",
	children: "Button",
};

export const Affirmative = Template.bind({});
Affirmative.args = {
	kind: "affirmative",
	children: "Button",
};

export const Negative = Template.bind({});
Negative.args = {
	kind: "negative",
	children: "Button",
};


export const IconButton = Template.bind({});
IconButton.args = {
	kind: "secondary",
	children: "Button",
	hasIcon: true
};
