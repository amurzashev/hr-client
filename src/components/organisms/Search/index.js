import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import Caption from '../../atoms/Caption';

const Form = styled.form`
  display: flex;
  width: 300px;
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const Input = styled.input`
  height: 36px;
  outline: none;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid ${props => props.error ? props.theme.colors.secondary.poppy : props.theme.colors.primary.white};
  padding: 0 12px;
  width: 100%;
  appearance: none;

`;

const Button = styled.button`
  height: 36px;
  padding: 0 20px;
  cursor: pointer;
  color: ${props => props.theme.colors.primary.white};
  background: ${props => props.theme.colors.secondary.pine};
  border: 0;
  border-radius: 3px;
  font-size: 16px;
`;

const InputWrap = styled.div`
  margin-right: 8px;
  width: 100%;
  & > p {
    position: absolute;
  }
`;

const Search = ({ history }) => {
  const [error, setError] = useState('');
  const [value, setValue] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    if (!value) {
      setError('Please type any city');
    } else {
      history.push(`/search/${value}`);
    }
  };
  const onChange = e => {
    if (error) {
      setError('');
    }
    setValue(e.target.value);
  };
  const inputProps = {
    onSubmit,
    onChange,
    error,
    value,
    type: 'text',
    placeholder: 'City',
  };
  return (
    <Form onSubmit={onSubmit}>
      <InputWrap>
        <Input {...inputProps} />
        <Caption size='s' color='poppy'>{error}</Caption>
      </InputWrap>
      <Button>
        Search
      </Button>
    </Form>
  );
};

export default withRouter(Search);
