import { Meta, StoryObj } from "@storybook/react";
import InputSlider, {
  InputSliderProps,
} from "../ui/Inputs/InputSlider/InputSlider";

export default {
  title: "components/Inputs/InputSlider",
  component: InputSlider,
  tags: ["autodocs"],
} as Meta<InputSliderProps>;

type Story = StoryObj<InputSliderProps>;

export const Slider: Story = {
  args: {},
  render: (args) => <InputSlider {...args} />,
};
