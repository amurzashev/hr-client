import styled from '@emotion/styled';

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
      return 16
  }
};

export default styled.p`
  font-size: ${props => setSize(props.size)}px;
  font-family: 'Roboto', sans-serif;
`;