import React from 'react';
import styled from '@emotion/styled';
import Search from '../Search';

const Wrap = styled.nav`
  height: 80px;
  width: 100%;
  background: ${props => props.theme.colors.primary.ink};
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

const Nav = () => {
  return (
    <Wrap>
      <Search />
    </Wrap>
  );
}

export default Nav;
