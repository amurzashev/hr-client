import React from 'react';
import styled from '@emotion/styled';
import Caption from '../Caption';
import { Link } from 'react-router-dom';

const Card  = styled(Link)`
  display: block;
  width: 440px;
  height: 220px;
  border-radius: 3px;
  background: ${props => props.theme.colors.primary.pacific};
  color: ${props => props.theme.colors.primary.white};
  padding: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 20px;
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    height: 180px;
  }
  & > p:first-of-type {
    margin-bottom: 8px;
  }
  & > p {
    text-align: center;
  }
`;

const Preview = ({ city }) => {
  return (
    <Card to={`/city/${city.lat},${city.lng}`}>
      <Caption size='xl'>{city.name}</Caption>
      <Caption size='xl'>{city.countryName}</Caption>
    </Card>
  )
};

export default Preview;
