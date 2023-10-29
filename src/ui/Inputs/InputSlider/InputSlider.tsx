import { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as S from "./InputSlider.styles";

export type InputSliderProps = {
  leftLabel?: string;
  leftIcon?: IconProp;
  rightLabel?: string;
  rightIcon?: IconProp;
  max?: string;
  min?: string;
  step?: string;
  color?: string;
  direction?: "horizontal" | "vertical";
} & Omit<
  InputProps,
  "placeholder" | "value" | "label" | "size" | "borderRadius"
>;

const InputSlider = (props: InputSliderProps) => {
  const {
    id,
    name,
    leftLabel,
    leftIcon,
    rightLabel,
    rightIcon,
    max = "10",
    min = "0",
    step = "1",
    color,
    direction,
  } = props;
  return (
    <S.InputSliderWrapper>
      {leftLabel && <S.LeftSliderLabel>{leftLabel}</S.LeftSliderLabel>}
      <S.Slider
        id={id}
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        color={color}
        direction={direction}
      />
      {rightLabel && <S.RightSliderLabel>{rightLabel}</S.RightSliderLabel>}
    </S.InputSliderWrapper>
  );
};

export default InputSlider;
