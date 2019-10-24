import React from 'react';
import styled from '@emotion/styled';
import Caption from 'components/atoms/Caption';
import moment from 'moment';
import Main from './components/Main';

const Wrap = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.primary.pacific};
  color: ${props => props.theme.colors.primary.white};
`;

export default ({ info }) => {
  console.log(info);
  const mainProps = {
    main: {
      apparentTemperature: info.currently.apparentTemperature,
      summary: info.currently.summary,
      icon: info.currently.icon,
    },
  }
  return (
    <Wrap>
      <Main {...mainProps} />
      <Caption size='l'>Today is {moment(Date.now()).format('dddd')}</Caption>
      <Caption size='l'>Summary for today's weather: {info.hourly.summary}</Caption>
      {info.daily.data.map(day => <Caption size='m' key={day.time}>{moment.unix(day.time).format('dddd')}</Caption>)}
    </Wrap>
  );
};
