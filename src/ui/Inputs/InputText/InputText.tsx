import * as Shared from "../SharedInput.styles";

export type InputTextProps = InputProps;

const InputText = (props: InputTextProps) => {
  const {
    id,
    name,
    type,
    placeholder,
    value,
    label,
    isDisabled,
    isReadOnly,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChange && onChange(event.target.value);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(event.target.value);
  };

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(event.target.value);
  };

  return (
    <Shared.InputWrapper>
      <Shared.Input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        readOnly={isReadOnly}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />
    </Shared.InputWrapper>
  );
};

export default InputText;
