import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ToastAlert from "./ToastAlert";
import Button from "../../Button";

export default {
    title: "Example/ToastAlert",
    component: ToastAlert,
    argTypes: {
        onClose: { action: "clicked" },
        onActionClick: { action: "action button clicked" }
    }
} as ComponentMeta<typeof ToastAlert>;

const Template: ComponentStory<typeof ToastAlert> = (args) => (
    <ToastAlert {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    kind: "primary",
    message: "Neutral info displayed here. Carry on."
};

export const Affirmative = Template.bind({});
Affirmative.args = {
    kind: "affirmative",
    message: "A successful message appears to those who did well"
};

export const Negative = Template.bind({});
Negative.args = {
    kind: "negative",
    message: "An error message displayed when something went wrong"
};

export const Warning = Template.bind({});
Warning.args = {
    kind: "warning",
    message: "Warning text here so you can be more careful"
};

export const Stateful = () => {
    const [visible, setVisible] = useState(true);
    // demo handler for visible toggle
    function handleClose() {
        setVisible(!visible);
    }
    return (
        <ToastAlert
            message="This is a stateful alert with visibility controls"
            isVisible={visible}
            onClose={() => handleClose()}
            onActionClick={() => alert("yey action did something")}
            buttonText="open alert"
        />
    );
};
