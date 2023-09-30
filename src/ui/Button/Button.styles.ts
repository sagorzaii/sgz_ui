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
  height: 38px;
  background: linear-gradient(135deg, var(--light-grey), var(--bg-color));
  border: none;
  border-radius: var(--curved);
  padding: 10px 30px;
  box-shadow: 1px 1px 4px var(--shadow-color);
  transition: margin-right 4s ease-in-out 1s;
  cursor: pointer;

  & > header {
    max-width: 80%;
    text-align: center;
    font-weight: var(--bold-fw);
    font-size: var(--button-fs);
    color: ${(props) =>
      props.buttonType === "primary"
        ? getGlobalStyles("--secondary-color")
        : getGlobalStyles("--white")};
  }

  /* background */
  background: ${(props) =>
    props.buttonType === "danger" && getGlobalStyles("--error-color")};
  background: ${(props) =>
    props.buttonType === "warning" && getGlobalStyles("--warning-color")};
  background: ${(props) =>
    props.buttonType === "success" && getGlobalStyles("--success-color")};

  /* size */
  max-width: ${(props) => props.size === "sm" && "150px"};
  max-width: ${(props) => props.size === "md" && "350px"};

  /* disabled */
  opacity: ${(props) => props.isDisabled === true && "0.5"};
  cursor: ${(props) => props.isDisabled === true && "not-allowed"};
  pointer-events: ${(props) => props.isDisabled === true && "none"};

  /* border radius */
  border-radius: ${(props) => props.border === "rounded" && "50px"};
  border-radius: ${(props) => props.border === "squared" && "unset"};

  &:hover header {
    color: ${(props) =>
      props.buttonType != "primary" && getGlobalStyles("--white")};
  }

  &:hover {
    background: linear-gradient(135deg, var(--light-grey), #eeeeeeff);
    background: ${(props) =>
      props.buttonType === "danger" &&
      `linear-gradient(135deg, ${getGlobalStyles(
        "--error-color"
      )}, #dc2626df)`};
    background: ${(props) =>
      props.buttonType === "warning" &&
      `linear-gradient(135deg, ${getGlobalStyles(
        "--warning-color"
      )}, #fcd34ddf)`};
    background: ${(props) =>
      props.buttonType === "success" &&
      `linear-gradient(135deg, ${getGlobalStyles(
        "--success-color"
      )}, #059669df)`};
  }
`;
