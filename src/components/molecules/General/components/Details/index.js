import React from 'react';
import styled from '@emotion/styled';
import Caption from 'components/atoms/Caption';

const Wrap = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.primary.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > p:not(:last-of-type) {
    margin-right: 8px;
  } 
`;

const Details = ({ details }) => {
  return (
    <Wrap>
      <Caption size='m'>Wind: {details.windSpeed}</Caption>
      <Caption size='m'>Humidity: {details.humidity}</Caption>
      <Caption size='m'>UV Index: {details.uvIndex}</Caption>
    </Wrap>
  );
};

export default Details;
