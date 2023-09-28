import type { Meta, StoryObj } from "@storybook/react";
import InputText, { InputTextProps } from "../ui/Inputs/InputText/InputText";

export default {
  title: "components/Inputs",
  component: InputText,
  tags: ["autodocs"],
} as Meta<InputTextProps>;

type Story = StoryObj<InputTextProps>;

export const Text: Story = {
  args: {
    placeholder: "Enter your name",
  },
};
