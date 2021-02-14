import styled from 'styled-components';

interface Props {
  background: string;
}

export const Container = styled.div<Props>`
  background: url(${props => props.background});
  background-size: cover;
  height: 100vh;
  scroll-snap-align: start;
`;
