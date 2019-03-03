import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
`;

export const ArrowIcon = ({ width, height, marginLeft, color }) => (
  <Container width={width} height={height} marginLeft={marginLeft}>
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 13">
      <path fill="currentColor" stroke="currentColor" d="M13 0l-.848.849 4.8 4.8H1v1.2h15.952l-4.8 4.8.848.848 5.824-5.824a.6.6 0 0 0 0-.848L13 0z" />
    </svg>
  </Container>
);
