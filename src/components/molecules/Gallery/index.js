
import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 940px;
  margin: auto;
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

export default ({ children }) => {
  return (
    <Wrap>
      { children }
    </Wrap>
  )
};
