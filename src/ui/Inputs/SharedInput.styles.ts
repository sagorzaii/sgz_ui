import styled from "styled-components";

export const InputWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  margin: 5px 0px;
`;

export const Label = styled.label`
  width: 100%;
  max-width: 100px;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 5px 0px;
  border: 1px solid var(--secondary-color);
  border-radius: var(--rounded);
  color: var(--black);
  font-size: var(--body-fs);
  font-weight: var(--medium-fw);

  :focus {
    outline: none;
  }
  /* Firefox */
  ::placeholder {
    color: var(--secondary-color);
    opacity: 1;
  }
  /* Edge 12 -18 */
  ::-ms-input-placeholder {
    color: var(--secondary-color);
  }
`;
