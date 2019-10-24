import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const setSize = size => {
  switch (size) {
    case 's':
      return 12;
    case 'm':
      return 16;
    case 'l':
      return 20;
    case 'xl':
      return 24;
    default:
      return 16;
  }
};

const Caption = styled.p`
  font-size: ${props => setSize(props.size)}px;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors.secondary[props.color]};
`;

Caption.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
};

Caption.defaultProps = {
  size: 16
};

export default Caption;
