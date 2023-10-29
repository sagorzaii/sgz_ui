import styled from "styled-components";
import { getGlobalStyles } from "../../../utils/getGlobalCSS";
import { Input, InputWrapper, Label } from "../SharedInput.styles";

export const getAccentColor = (color?: string) => {
  if (color) return `accent-color: ${color}`;
  return `accent-color: ${getGlobalStyles("--primary-color")}`;
};

export const InputSliderWrapper = styled(InputWrapper)`
  width: 100%;
`;

export const Slider = styled(Input)<{ color?: string }>`
  width: 100%;
  padding: 0;
  cursor: grab;
  ${({ color }) => getAccentColor(color)};
`;

export const LeftSliderLabel = styled(Label)``;

export const RightSliderLabel = styled(Label)``;
