import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "./Alert";
import Button from "../Button";

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

export const CTA = Template.bind({});
CTA.args = {
    message: "Some text with CTA button",
    actions: <Button kind="outline-primary" />
};

export const Stateful = () => {
    const [visible, setVisible] = useState(true);
    // demo handler for visible toggle
    function handleClose() {
        setVisible(!visible);
    }
    return (
        <Alert
            message="This is a stateful alert with visibility controls"
            isVisible={visible}
            onClose={() => handleClose()}
        />
    );
};
