import React from "react";

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    kind?: "primary" | "secondary";
    /**
     * How large should the button be?
     */
    size?: 'sm' | 'md' | 'lg';

    /**
     * Passed in children
     */
    children: React.ReactNode;
    /**
    * Optional click handler
    */
    onClick?: () => void;
}
