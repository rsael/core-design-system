import React, { AriaRole, ReactNode } from "react";
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
    children?: ReactNode;
    message?: string;
    onClose?: () => void;
}

const StyledAlert = styled.div(({ kind }: AlertProps) => [
    tw`flex items-center justify-between px-6 py-4 text-sm text-gray-500 border-l-4 appearance-none`,
    kind === "primary" && tw`border-primary bg-primary-subtle`,
    kind === "affirmative" && tw`bg-green-100 border-green-300 `,
    kind === "negative" && tw`bg-red-100 border-red-300 `,
    kind === "warning" && tw`bg-yellow-100 border-yellow-400 `
]);

const Container = styled.div(() => [tw`flex place-items-center`]);

const Alert = ({
    children,
    kind,
    message,
    onClose,
    ...props
}: AlertProps): JSX.Element => {
    switch (kind) {
        case "affirmative": {
            return (
                <StyledAlert kind={kind} {...props} role="alert">
                    <Container>
                        <FiCheckCircle
                            size={18}
                            tw="text-green-300 mr-8"
                            onClick={onClose}
                        />
                        {children || message || "Alert"}
                    </Container>
                    <FiX />
                </StyledAlert>
            );
        }
        case "negative": {
            return (
                <StyledAlert kind={kind} {...props} role="alert">
                    <Container>
                        <FiXCircle
                            size={18}
                            tw="text-red-300 mr-8"
                            onClick={onClose}
                        />
                        {children || message || "Alert"}
                    </Container>
                    <FiX />
                </StyledAlert>
            );
        }
        case "warning": {
            return (
                <StyledAlert kind={kind} {...props} role="alert">
                    <Container>
                        <FiAlertTriangle
                            size={18}
                            tw="text-yellow-400 mr-8"
                            onClick={onClose}
                        />
                        {children || message || "Alert"}
                    </Container>
                    <FiX />
                </StyledAlert>
            );
        }
        default: {
            return (
                <StyledAlert kind={kind} {...props} role="alert">
                    <Container>
                        <FiAlertCircle
                            size={18}
                            tw="text-primary mr-8"
                            onClick={onClose}
                        />
                        {children || message || "Alert"}
                    </Container>
                    <FiX />
                </StyledAlert>
            );
        }
    }
};

Alert.defaultProps = {
    kind: "primary"
};

export default Alert;
