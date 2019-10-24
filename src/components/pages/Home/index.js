import React from 'react';
import HomeTemplate from 'components/templates/HomeTemplate';
import Search from 'components/organisms/Search';
import styled from '@emotion/styled';

const HomeSearch = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.theme.colors.primary.ink};
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export default () => {
  return (
    <HomeTemplate>
      <HomeSearch>
        <Search />
      </HomeSearch>
    </HomeTemplate>
  )
};
