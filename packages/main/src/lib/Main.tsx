import styled from '@emotion/styled';
import { core } from '@comp/core';
import { DepA } from '@comp/dep-a';

/* eslint-disable-next-line */
export interface MainProps {}

const StyledMain = styled.div`
  color: pink;
`;

export function Main(props: MainProps) {
  const l = core();
  return (
    <StyledMain>
      <h1>Welcome to Main!</h1>
      <DepA />
      {l}
    </StyledMain>
  );
}

export default Main;
