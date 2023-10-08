import type { Meta, StoryObj } from "@storybook/react";
import InputText, { InputTextProps } from "../ui/Inputs/InputText/InputText";

export default {
  title: "components/Inputs/InputText",
  component: InputText,
  tags: ["autodocs"],
} as Meta<InputTextProps>;

type Story = StoryObj<InputTextProps>;

const InputTextComponent = ({ children }: any) => {
  return (
    <div style={{ width: "800px", border: "1px solid grey", padding: "20px" }}>
      {children}
    </div>
  );
};

export const InputTextWithLabel: Story = {
  args: {
    defaultValue: "Hello World!",
    label: "With Label",
    borderRadius: "squared",
  },
  render: (args) => (
    <InputTextComponent>
      <InputText {...args} />
    </InputTextComponent>
  ),
};

export const InputTextBlockWithLabel: Story = {
  args: {
    defaultValue: "Hello World!",
    label: "Blocked with Label",
    borderRadius: "rounded",
  },
  render: (args) => (
    <InputTextComponent>
      <InputText isBlocked={true} {...args} />
    </InputTextComponent>
  ),
};

export const InputTextWithPlaceholder: Story = {
  args: {
    placeholder: "without blocked & label",
    borderRadius: "circled",
  },
  render: (args) => (
    <InputTextComponent>
      <InputText {...args} />
    </InputTextComponent>
  ),
};
