import React, { useEffect, useState } from 'react';
import apiRequest from 'apiRequest';
import Status from 'components/atoms/Status';
import General from 'components/molecules/General';

const City = props => {
  const [weather, setWeather] = useState({});
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    apiRequest(`current/${props.match.params.coordinates}`)
    .then(resp => {
      if (resp.data.code === 400) {
        setStatus('empty');
      } else {
        setWeather(resp.data);
        setStatus('');
      }
    })
    .catch(() => {
      setStatus('connection');
    });
  }, [props.match.params.coordinates]);
  if (status) {
    return <Status type={status} />
  } else {
    return (
      <>
        <General info={weather} />
      </>
    );
  }
};

export default City;
