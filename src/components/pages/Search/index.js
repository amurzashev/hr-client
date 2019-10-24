import React, { useEffect, useState } from 'react';
import Status from 'components/atoms/Status';
import apiRequest from 'apiRequest';

const Search = props => {
  const [cities, setCities] = useState([]);
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    setStatus('loading');
    apiRequest.get(`autocomplete/${props.match.params.city}`)
      .then(resp => {
        if (resp.data.locations.length === 0) {
          setStatus('empty');
        }
        setCities(resp.data.locations);
      })
      .catch(() => {
        setStatus('error');        
      });
  }, [props.match.params.city]);
  if (!cities.length ) {
    return <Status type={status} />;
  }
  console.log(cities);
  return <p>ijhnjk</p>;
};

export default Search;
