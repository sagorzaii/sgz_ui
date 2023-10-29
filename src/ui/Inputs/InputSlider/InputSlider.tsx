import { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as S from "./InputSlider.styles";

export type InputSliderProps = {
  leftLabel: string;
  leftIcon?: IconProp;
  rightLabel?: string;
  rightIcon?: IconProp;
  max?: number;
  min?: number;
  step?: number;
  color?: string;
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
    defaultValue = "5",
  } = props;
  return (
    <S.InputSliderWrapper>
      <S.Slider
        id={id}
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        // value={defaultValue}
      />
    </S.InputSliderWrapper>
  );
};

export default InputSlider;
