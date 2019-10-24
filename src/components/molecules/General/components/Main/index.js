import React from 'react';
import styled from '@emotion/styled';
import Caption from 'components/atoms/Caption';
import Icon from 'components/atoms/Icon';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = ({ main }) => {
  console.log(main)
  return (
    <Wrap>
      <Description>
        <Icon type={main.icon} />
        <Caption size='xl'>{Math.round(main.apparentTemperature)}˚ {main.summary}</Caption>
      </Description>
    </Wrap>
  );
};

export default Main;
