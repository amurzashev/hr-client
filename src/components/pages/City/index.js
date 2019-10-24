import React, { useEffect } from 'react';
import apiRequest from 'apiRequest';

const City = props => {
  useEffect(() => {
    apiRequest(`current/${props.match.params.coordinates}`)
    .then(resp => console.log(resp.data))
    .catch(err => console.log(err.response.data));
  }, [props.match.params.coordinates]);
  return <p>city info</p>
};

export default City;
