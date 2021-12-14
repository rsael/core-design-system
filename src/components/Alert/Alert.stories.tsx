import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "./Alert";

export default {
    title: "Example/Alert",
    component: Alert,
    argTypes: {
        onClose: { action: "clicked" }
    }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    kind: "primary",
    children: "Neutral info displayed here. Carry on."
};

export const Affirmative = Template.bind({});
Affirmative.args = {
    kind: "affirmative",
    children: "A successful message appears to those who did well"
};

export const Negative = Template.bind({});
Negative.args = {
    kind: "negative",
    children: "An error message displayed when something went wrong"
};

export const Warning = Template.bind({});
Warning.args = {
    kind: "warning",
    children: "Warning text here so you can be more careful"
};
