import React, { ReactNode, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export interface AccordionProps {
    title?: string;
    content?: string | ReactNode;
}

// since the component is stateful it needs separate props
type internalProps = {
    open: boolean;
};

const StyledAccordion = styled.div(({ open }: internalProps) => [
    tw`p-3 my-1 rounded-md appearance-none focus:outline-none`,
    open && tw`shadow-lg`
]);

const AccordionHeader = styled.div(() => [
    tw`flex items-center justify-between font-medium`
]);

const AccordionBody = styled.div(() => [tw`px-3 py-2 text-gray-500`]);

const Accordion = ({ title, content }: AccordionProps): JSX.Element => {
    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(!open);
    }

    return (
        <StyledAccordion open={open}>
            <AccordionHeader>
                <h3>{title}</h3>
                {open ? (
                    <FiChevronUp
                        size={18}
                        tw="text-primary"
                        onClick={() => toggle()}
                    />
                ) : (
                    <FiChevronDown size={18} onClick={() => toggle()} />
                )}
            </AccordionHeader>
            {open && <AccordionBody>{content}</AccordionBody>}
        </StyledAccordion>
    );
};

Accordion.defaultProps = {
    title: "Accordion",
    content: "This is the accordion body could be a component too !!!"
};

export default Accordion;
