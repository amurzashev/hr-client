import React from 'react';
import * as Icons from 'weather-icons-react';

export default ({ type, color = '#FFFFFF' }) => {
  const iconProp = {
    size: 32,
    color,
  };
  
  const icons = {
    'clear-day': <Icons.WiDaySunny {...iconProp} />,
    'clear-night': <Icons.WiNightClear {...iconProp} />,
    'rain': <Icons.WiRain {...iconProp} />,
    'snow': <Icons.WiSnow {...iconProp} />,
    'sleet': <Icons.WiSleet {...iconProp} />,
    'wind': <Icons.WiWindy {...iconProp} />,
    'fog': <Icons.WiFog {...iconProp} />,
    'cloudy': <Icons.WiCloudy {...iconProp} />,
    'partly-cloudy-day': <Icons.WiDayCloudyHigh {...iconProp} />,
    'partly-cloudy-night': <Icons.WiNightPartlyCloudy {...iconProp} />,
    'temp': <Icons.WiThermometer {...iconProp} />,
  };

  return icons[type];
};
