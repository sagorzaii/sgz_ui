import styled from "styled-components";
import { getGlobalStyles } from "../../utils/getGlobalCSS";
const style = getComputedStyle(document.body);

interface ButtonCSSProps {
    buttonType: "primary" | "success" | "danger" | "warning";
    size?: "sm" | "md" | "bg";
    border?: "squared" | "curved" | "rounded";
    isDisabled?: boolean;
}

export const ButtonWrapper = styled.button<ButtonCSSProps>`
    display: block;
    width: 100%;
    max-width: 150px;
    height: 38px;
    background-color: var(--bg-color);
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    padding: 10px 30px;
    margin: 10px;
    box-shadow: 1px 1px 4px var(--shadow-color);
    transition: ease-in-out 150ms;
    cursor: pointer;

    & > header {
        max-width: 80%;
        text-align: center;
        font-weight: var(--bold-fw);
        font-size: var(--button-fs);
        color: var(--primary-color);

        /* color */
        color: ${props =>
            props.buttonType === "danger" &&
            getGlobalStyles("--error-color")};
        color: ${props =>
            props.buttonType === "warning" &&
            getGlobalStyles("--warning-color")};
        color: ${props =>
            props.buttonType === "success" &&
            getGlobalStyles("--success-color")};
    }

    /* border color */
    border-color: ${props =>
        props.buttonType === "danger" && getGlobalStyles("--error-color")};
    border-color: ${props =>
        props.buttonType === "warning" &&
        getGlobalStyles("--warning-color")};
    border-color: ${props =>
        props.buttonType === "success" &&
        getGlobalStyles("--success-color")};

    /* size */
    max-width: ${props => props.size === "md" && "350px"};
    max-width: ${props => props.size === "bg" && "550px"};

    /* disabled */
    opacity: ${props => props.isDisabled === true && "0.5"};
    cursor: ${props => props.isDisabled === true && "not-allowed"};
    pointer-events: ${props => props.isDisabled === true && "none"};

    /* border radius */
    border-radius: ${props => props.border === "rounded" && "50px"};
    border-radius: ${props => props.border === "squared" && "unset"};

    &:hover header {
        color: var(--white);
    }

    &:hover {
        background-color: var(--primary-color);
        background-color: ${props =>
            props.buttonType === "danger" &&
            getGlobalStyles("--error-color")};
        background-color: ${props =>
            props.buttonType === "warning" &&
            getGlobalStyles("--warning-color")};
        background-color: ${props =>
            props.buttonType === "success" &&
            getGlobalStyles("--success-color")};
    }
`;
