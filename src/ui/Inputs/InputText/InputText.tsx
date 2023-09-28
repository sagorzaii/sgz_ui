import * as S from "./InputText.styles";

export type InputTextProps = { isBlocked?: boolean } & InputProps;

const InputText = (props: InputTextProps) => {
  const {
    id,
    name,
    placeholder,
    value,
    label,
    isDisabled,
    isReadOnly,
    isBlocked = false,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(event.target.value);
  };

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(event.target.value);
  };

  return (
    <S.InputTextWrapper isBlocked={isBlocked}>
      {label && <S.InputTextLabel htmlFor={id}>{label}</S.InputTextLabel>}
      <S.InputText
        id={id}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        readOnly={isReadOnly}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />
    </S.InputTextWrapper>
  );
};

export default InputText;
