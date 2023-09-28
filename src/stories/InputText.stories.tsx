import type { Meta, StoryObj } from "@storybook/react";
import InputText, { InputTextProps } from "../ui/Inputs/InputText/InputText";

export default {
  title: "components/Inputs",
  component: InputText,
  tags: ["autodocs"],
} as Meta<InputTextProps>;

type Story = StoryObj<InputTextProps>;

const InputTextComponent = () => {
  return (
    <div
      style={{ width: "800px", backgroundColor: "#ececec", padding: "20px" }}
    >
      <InputText label="With Label" />
      <InputText label="Blocked with Label" isBlocked={true} />
      <InputText placeholder="Without blocked & label" />
    </div>
  );
};

export const Text: Story = {
  render: () => <InputTextComponent />,
};
