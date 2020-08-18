import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  containerStyle?: object;
}

const Input: React.FC<InputProps> = ({
  // eslint-disable-next-line react/prop-types
  name,
  // eslint-disable-next-line react/prop-types
  containerStyle = {},
  // eslint-disable-next-line react/prop-types
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container style={containerStyle}>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};

export default Input;
