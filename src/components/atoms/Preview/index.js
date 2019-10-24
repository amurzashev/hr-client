import React from 'react';
import styled from '@emotion/styled';
import Caption from '../Caption';

const Card  = styled.div`
  width: 440px;
  height: 320px;
  border-radius: 3px;
  background: red;
  cursor: pointer;
`;

const Preview = ({ city }) => {
  return (
    <Card>
      <Caption>{city.name}, {city.countryCode}</Caption>
    </Card>
  )
};

export default Preview;
