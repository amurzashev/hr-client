import React, { useEffect, useState } from 'react';
import apiRequest from 'apiRequest';
import Status from 'components/atoms/Status';

const City = props => {
  const [weather, setWeather] = useState({});
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    apiRequest(`current/${props.match.params.coordinates}`)
    .then(resp => {
      setWeather(resp.data);
    })
    .catch(err => console.log(err.response.data));
  }, [props.match.params.coordinates]);
  if (Object.entries(weather).length === 0) return <Status type={status} />
  return <p>city info</p>
};

export default City;
