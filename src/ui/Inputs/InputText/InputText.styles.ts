import styled from "styled-components";
import { Input, InputWrapper, Label } from "../SharedInput.styles";

export const InputTextWrapper = styled(InputWrapper)<{ isBlocked: boolean }>`
  width: 100%;
  ${(p) => p.isBlocked && `display:block;`}
`;

export const InputText = styled(Input)``;

export const InputTextLabel = styled(Label)`
  margin-right: 10px;
`;
