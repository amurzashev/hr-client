import React from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
 & > input {
   margin-right: 8px;
 }
`;

const Input = styled.input`
  height: 36px;
  outline: none;
  font-size: 14px;
  border-radius: 3px;
  border: 0;
  padding: 0 12px;
`;

const Button = styled.button`
  height: 36px;
  padding: 0 20px;
  cursor: pointer;
  color: ${props => props.theme.colors.primary.white};
  background: ${props => props.theme.colors.secondary.pine};
  border: 0;
  border-radius: 3px;
  font-size: 14px;
`;

export default () => {
  return (
    <Form>
      <Input type='text' placeholder='Start typing here' />
      <Button>
        Search
      </Button>
    </Form>
  );
};
