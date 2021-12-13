import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spinner from "./Spinner";

export default {
	title: "Example/Spinner",
	component: Spinner,
	argTypes: {
		backgroundColor: { control: "color" },
		onClick: { action: "clicked" },
	},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const SpinnerActive = Template.bind({});

