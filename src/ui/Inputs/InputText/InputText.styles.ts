import styled from "styled-components";
import { DisabledState } from "../../../ui/Shared.styles";
import {
  Input,
  InputWrapper,
  Label,
  getBorderRadius,
} from "../SharedInput.styles";

export const InputTextWrapper = styled(InputWrapper)<{ isBlocked: boolean }>`
  width: 100%;
  ${(p) => p.isBlocked && `display:block;`}
`;

export const InputText = styled(Input)<{
  borderRadius: BorderRadius;
  isDisabled: boolean;
}>`
  border-radius: ${(p) => getBorderRadius(p.borderRadius)};
  background: #fafafa;
  border: 0.2px solid var(--light-grey);
  box-shadow: 0.2px 0.2px var(--secondary-color);
  ${(p) => p.isDisabled && DisabledState}
`;

export const InputTextLabel = styled(Label)`
  margin-right: 10px;
  font-family: var(--primary-ff);
`;
