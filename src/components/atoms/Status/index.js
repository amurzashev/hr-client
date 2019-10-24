import React from 'react';
import styled from '@emotion/styled';
import { BeatLoader } from 'react-spinners';
import Caption from '../Caption';

const Wrap = styled.div`
  height: 160px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const types = {
  'loading': <BeatLoader />,
  'empty': <Caption size='l'>Nothing found😔</Caption>
};

export default ({ type }) => {
  return (
    <Wrap>
      { types[type] }
    </Wrap>
  );
};
