import React, { AriaRole, ReactNode, isValidElement } from "react";
import tw, { css } from "twin.macro";
import styled from "styled-components";
import {
    FiX,
    FiXCircle,
    FiAlertCircle,
    FiCheckCircle,
    FiAlertTriangle
} from "react-icons/fi";
import Button from "../../Button";

export interface ToastAlertProps {
    kind: "primary" | "affirmative" | "negative" | "warning";
    role?: AriaRole;
    title?: string;
    message?: string;
    isVisible?: boolean;
    onClose?: () => void;
    onActionClick?: () => void;
    hideCloseButton?: boolean;
    buttonText?: string;
    actions?: ReactNode;
}

const StyledAlert = styled.div(({ kind, isVisible }: ToastAlertProps) => [
    tw`flex items-start justify-between px-6 py-4 border-l-4 appearance-none`,
    kind === "primary" && tw`border-primary bg-primary-subtle`,
    kind === "affirmative" && tw`bg-green-100 border-green-300 `,
    kind === "negative" && tw`bg-red-100 border-red-300 `,
    kind === "warning" && tw`bg-yellow-100 border-yellow-400 `,
    !isVisible && tw`hidden`,

    /* styling for title and message */
    css`
        h3 {
            ${tw`mb-1 font-medium`}
        }
        p {
            ${tw`mb-2 text-gray-500`}
        }
    `
]);

const AlertBody = styled.div(() => [tw`flex-grow place-items-center`]);

const ToastAlert = ({
    kind,
    role,
    title,
    message,
    actions,
    isVisible,
    onClose,
    onActionClick,
    hideCloseButton,
    buttonText,
    ...props
}: ToastAlertProps): JSX.Element => {
    // alert close handler
    function handleClose() {
        onClose ? onClose() : null;
    }

    // action button click
    function handleActionClick() {
        onActionClick ? onActionClick() : null;
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
                    <FiCheckCircle size={22} tw="text-green-300 mr-8 mt-0.5" />
                    <AlertBody>
                        <h3>{title}</h3>
                        <p>{message}</p>
                        <Button
                            size="sm"
                            kind="outline-primary"
                            onClick={() => handleActionClick()}
                        >
                            {buttonText}
                        </Button>
                    </AlertBody>
                    {!hideCloseButton && (
                        <FiX
                            tw="cursor-pointer"
                            onClick={() => handleClose()}
                            title="close"
                        />
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
                    <FiXCircle size={22} tw="text-red-300 mr-8 mt-0.5" />
                    <AlertBody>
                        <h3>{title}</h3>
                        <p>{message}</p>
                        <Button
                            size="sm"
                            kind="outline-primary"
                            onClick={() => handleActionClick()}
                        >
                            {buttonText}
                        </Button>
                    </AlertBody>
                    {!hideCloseButton && (
                        <FiX
                            tw="cursor-pointer"
                            onClick={() => handleClose()}
                            title="close"
                        />
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
                    <FiAlertTriangle
                        size={22}
                        tw="text-yellow-400 mr-8 mt-0.5"
                        title="close"
                    />
                    <AlertBody>
                        <h3>{title}</h3>
                        <p>{message}</p>
                        <Button
                            size="sm"
                            kind="outline-primary"
                            onClick={() => handleActionClick()}
                        >
                            {buttonText}
                        </Button>
                    </AlertBody>
                    {!hideCloseButton && (
                        <FiX
                            tw="cursor-pointer"
                            onClick={() => handleClose()}
                            title="close"
                        />
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
                    <FiAlertCircle size={22} tw="text-primary mr-8 mt-0.5" />
                    <AlertBody>
                        <h3>{title}</h3>
                        <p>{message}</p>
                        <Button
                            size="sm"
                            kind="outline-primary"
                            onClick={() => handleActionClick()}
                        >
                            {buttonText}
                        </Button>
                    </AlertBody>
                    {!hideCloseButton && (
                        <FiX
                            tw="cursor-pointer"
                            onClick={() => handleClose()}
                            title="close"
                        />
                    )}
                </StyledAlert>
            );
        }
    }
};

ToastAlert.defaultProps = {
    kind: "primary",
    role: "alert",
    title: "Something happened !!!",
    message: "No worries, I'll tell you all about it",
    buttonText: "learn more",
    isVisible: true,
    hideClosebutton: false
};

export default ToastAlert;
