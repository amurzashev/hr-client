import React from 'react';
import styled from '@emotion/styled';
import Caption from 'components/atoms/Caption';
import Icon from 'components/atoms/Icon';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = ({ main }) => (
  <Wrap>
    <Description>
      <Icon type={main.icon} />
      <Caption size='xl'>{Math.round(main.apparentTemperature)}˚F {main.summary}</Caption>
    </Description>
    <Caption size='xxl'>{main.fullSummary}</Caption>
  </Wrap>
);

export default Main;
