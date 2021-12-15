import React, { AriaRole, ReactNode, MouseEvent, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
    FiX,
    FiXCircle,
    FiAlertCircle,
    FiCheckCircle,
    FiAlertTriangle
} from "react-icons/fi";

export interface AlertProps {
    kind: "primary" | "affirmative" | "negative" | "warning";
    role?: AriaRole;
    message?: string;
    isVisible?: boolean;
    onClose?: () => void;
    children?: ReactNode;
    hideCloseButton?: boolean;
}

const StyledAlert = styled.div(({ kind, isVisible }: AlertProps) => [
    tw`flex items-center justify-between px-6 py-4 text-base font-medium border-l-4 appearance-none`,
    kind === "primary" && tw`border-primary bg-primary-subtle`,
    kind === "affirmative" && tw`bg-green-100 border-green-300 `,
    kind === "negative" && tw`bg-red-100 border-red-300 `,
    kind === "warning" && tw`bg-yellow-100 border-yellow-400 `,
    !isVisible && tw`hidden`
]);

const Container = styled.div(() => [tw`flex place-items-center`]);

const Alert = ({
    kind,
    role,
    message,
    isVisible,
    onClose,
    children,
    hideCloseButton,
    ...props
}: AlertProps): JSX.Element => {
    // alert close handler
    function handleClose() {
        onClose ? onClose() : null;
    }

    switch (kind) {
        case "affirmative": {
            return (
                <StyledAlert
                    kind={kind}
                    role={role}
                    isVisible={isVisible}
                    hideCloseButton={hideCloseButton}
                    {...props}
                >
                    <Container>
                        <FiCheckCircle size={18} tw="text-green-300 mr-8" />
                        {message || children || "Alert"}
                    </Container>
                    {!hideCloseButton && (
                        <FiX onClick={() => handleClose()} title="close" />
                    )}
                </StyledAlert>
            );
        }
        case "negative": {
            return (
                <StyledAlert
                    kind={kind}
                    role={role}
                    isVisible={isVisible}
                    hideCloseButton={hideCloseButton}
                    {...props}
                >
                    <Container>
                        <FiXCircle size={18} tw="text-red-300 mr-8" />
                        {message || children || "Alert"}
                    </Container>
                    {!hideCloseButton && (
                        <FiX onClick={() => handleClose()} title="close" />
                    )}
                </StyledAlert>
            );
        }
        case "warning": {
            return (
                <StyledAlert
                    kind={kind}
                    role={role}
                    isVisible={isVisible}
                    hideCloseButton={hideCloseButton}
                    {...props}
                >
                    <Container>
                        <FiAlertTriangle size={18} tw="text-yellow-400 mr-8" />
                        {message || children || "Alert"}
                    </Container>
                    {!hideCloseButton && (
                        <FiX onClick={() => handleClose()} title="close" />
                    )}
                </StyledAlert>
            );
        }
        default: {
            return (
                <StyledAlert
                    kind={kind}
                    role={role}
                    isVisible={isVisible}
                    hideCloseButton={hideCloseButton}
                    {...props}
                >
                    <Container>
                        <FiAlertCircle size={18} tw="text-primary mr-8" />
                        {message || children || "Alert"}
                    </Container>
                    {!hideCloseButton && (
                        <FiX onClick={() => handleClose()} title="close" />
                    )}
                </StyledAlert>
            );
        }
    }
};

Alert.defaultProps = {
    kind: "primary",
    role: "alert",
    isVisible: true,
    hideClosebutton: false
};

export default Alert;
