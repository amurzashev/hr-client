import React from 'react';
import styled from '@emotion/styled';
import Icon from 'components/atoms/Icon';
import Caption from 'components/atoms/Caption';
import moment from 'moment';

const Wrap = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  background: ${props => props.theme.colors.primary.white};
  &:nth-of-type(even) {
    background: ${props => props.theme.colors.primary.lightGray};
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: ${props => props.theme.colors.primary.darkGray};
  }
  color: ${props => props.theme.colors.primary.black};
`;

const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Day = props => {
  const {
    icon,
    time,
    apparentTemperatureMin,
    apparentTemperatureMax,
  } = props;
  return (
    <Wrap>
      <Block>
        <Icon type={icon} color='#0052CC' />
        <Caption size='m'>{moment.unix(time).format('ddd MMM Do')}</Caption>
      </Block>
      <Block>
        <Caption size='m'>{Math.round(apparentTemperatureMin)}F - {Math.round(apparentTemperatureMax)}F</Caption>
        <Icon type='temp' color='#0052CC' />
      </Block>
    </Wrap>
  );
}

export default Day;
