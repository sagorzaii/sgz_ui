import styled from "styled-components";
import { Input, InputWrapper } from "../SharedInput.styles";

export const InputSliderWrapper = styled(InputWrapper)`
  width: 100%;
`;

export const Slider = styled(Input)`
  width: 100%;
  padding: 0;
  accent-color: black;
  cursor: grab;
`;
