import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import styled from 'styled-components';

interface Props {
  name: string;
  label?: string;
  rest?: string;
  ref?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const CustomInput = styled.input<any>`
  width: 100%;
  border: 0;
`;

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);
  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <CustomInput
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        error={error}
      />
    </>
  );
};
export default Input;
