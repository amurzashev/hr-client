import React, { useEffect, useState } from 'react';
import Status from 'components/atoms/Status';
import Preview from 'components/atoms/Preview';
import Gallery from 'components/molecules/Gallery';
import apiRequest from 'apiRequest';

const Search = props => {
  const [cities, setCities] = useState([]);
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    setStatus('loading');
    setCities([]);
    apiRequest.get(`autocomplete/${props.match.params.city}`)
      .then(resp => {
        if (resp.data.locations.length === 0) {
          setStatus('empty');
        }
        setCities(resp.data.locations);
      })
      .catch(() => {
        setCities([]);
        setStatus('connection');        
      });
  }, [props.match.params.city]);
  if (!cities.length) {
    return <Status type={status} />;
  }
  return (
    <Gallery>
      {cities.map(city => <Preview key={city.geonameId} city={city} />)}
    </Gallery>
  );
};

export default Search;
