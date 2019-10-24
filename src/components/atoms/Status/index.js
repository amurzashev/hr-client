/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from '@emotion/styled';
import { BeatLoader } from 'react-spinners';
import Caption from '../Caption';
import { File, Planet } from 'react-kawaii';

const Wrap = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > p {
    margin-top: 10px;
  }
`;

const types = {
  'loading': <BeatLoader />,
  'empty': <Caption size='l'>Nothing found😔</Caption>,
  '404': (
    <>
      <File color='#36B37E' mood='ko' size={200} />
      <Caption size='xl'>Page not found</Caption>
    </>
  ),
  'home': (
    <>
      <Planet color='#FFAB00' mood='happy' size={200} />
      <Caption size='xl'>Hello world!</Caption>
    </>
  ),
  'connection': (
    <>
      <File color='#36B37E' mood='ko' size={200} />
      <Caption size='xl'>Something went wrong</Caption>
    </>
  ),
};

export default ({ type = 'loading' }) => {
  return (
    <Wrap>
      { types[type] }
    </Wrap>
  );
};
