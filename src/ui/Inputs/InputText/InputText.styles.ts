import styled from "styled-components";
import { getGlobalStyles } from "../../../utils/getGlobalCSS";
import { Input, InputWrapper, Label } from "../SharedInput.styles";

const getBorderRadius = (borderRadius: BorderRadius) => {
  switch (borderRadius) {
    case "circled":
      return getGlobalStyles("--circled");
    case "rounded":
      return getGlobalStyles("--curved");
    case "squared":
    default:
      return;
  }
};

export const InputTextWrapper = styled(InputWrapper)<{ isBlocked: boolean }>`
  width: 100%;
  ${(p) => p.isBlocked && `display:block;`}
`;

export const InputText = styled(Input)<{ borderRadius: BorderRadius }>`
  border-radius: ${(p) => getBorderRadius(p.borderRadius)};
  background: #fafafa;
  border: 0.2px solid var(--light-grey);
  box-shadow: 0.2px 0.2px var(--secondary-color);
`;

export const InputTextLabel = styled(Label)`
  margin-right: 10px;
  font-family: var(--primary-ff);
`;
