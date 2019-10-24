import React from 'react';
import styled from '@emotion/styled';
import Caption from '../Caption';
import { Link } from 'react-router-dom';

const Card  = styled(Link)`
  display: block;
  width: 440px;
  height: 320px;
  border-radius: 3px;
  background: ${props => props.theme.colors.primary.pacific};
  color: ${props => props.theme.colors.primary.white};
  padding: 20px;
  cursor: pointer;
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    height: 180px;
  }
`;

const Preview = ({ city }) => {
  return (
    <Card to={`city/${city.lat},${city.lng}`}>
      <Caption>{city.name}, {city.countryCode}</Caption>
    </Card>
  )
};

export default Preview;
