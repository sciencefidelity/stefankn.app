import styled from 'styled-components';
import { Text } from '@buffetjs/core';

const Span = styled(Text)`
  color: #6d7d7b;
  cursor: pointer;
`;

Span.defaultProps = {
  as: 'span',
};

export default Span;
