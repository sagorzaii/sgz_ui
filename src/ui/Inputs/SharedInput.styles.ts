import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  color: #7f8794;
  margin: 0;
  position: absolute;
  transform: translate(14px, 13px);
  transition: all 0.2s ease-out;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding: 6px 12px;
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
