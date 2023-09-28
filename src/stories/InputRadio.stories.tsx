import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import InputRadio, {
  InputRadioProps,
} from "../ui/Inputs/InputRadio/InputRadio";

export default {
  title: "components/Inputs",
  component: InputRadio,
  tags: ["autodocs"],
} as Meta<InputRadioProps>;

type Story = StoryObj<InputRadioProps>;

const InputRadioComponents = () => {
  const [isChecked, setIsChecked] = useState<Record<string, boolean>>({
    name: false,
    age: false,
    gender: false,
  });

  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked({
      [ev.target.value]: ev.target.checked,
    });
  };

  return (
    <>
      <InputRadio
        id="name"
        label="name"
        value="name"
        checked={isChecked.name}
        onChange={handleOnChange}
      />
      <InputRadio
        id="age"
        label="age"
        value="age"
        checked={isChecked.age}
        onChange={handleOnChange}
      />
      <InputRadio
        id="gender"
        label="gender"
        value="gender"
        checked={isChecked.gender}
        onChange={handleOnChange}
      />
    </>
  );
};

export const Radio: Story = {
  render: () => <InputRadioComponents />,
};
