import React from 'react';
import styled from '@emotion/styled';
import Main from './components/Main';
import Details from './components/Details';
import Day from './components/Day';

const Wrap = styled.div`
  color: ${props => props.theme.colors.primary.white};
`;

const Head = styled.div`
  background: ${props => props.theme.colors.primary.pacific};
`;

const Week = styled.div`
  margin: auto;
  width: 100%;
  max-width: 900px;
`;

export default ({ info }) => {
  const mainProps = {
    main: {
      apparentTemperature: info.currently.apparentTemperature,
      summary: info.currently.summary,
      icon: info.currently.icon,
      fullSummary: info.hourly.summary,
    },
  };
  const detailsProps = {
    details: {
      uvIndex: info.currently.uvIndex,
      humidity: info.currently.humidity,
      windSpeed: info.currently.windSpeed,
    },
  };
  return (
    <Wrap>
      <Head>
        <Main {...mainProps} />
        <Details {...detailsProps} />
      </Head>
      <Week>
        { info.daily.data.map(day => <Day key={day.time} {...day} />) }
      </Week>
    </Wrap>
  );
};
