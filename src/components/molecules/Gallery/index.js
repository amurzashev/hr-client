
import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  & > div:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default ({ children }) => {
  return (
    <Wrap>
      { children }
    </Wrap>
  )
};
