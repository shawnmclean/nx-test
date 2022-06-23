import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DepAProps {}

const StyledDepA = styled.div`
  color: pink;
`;

export function DepA(props: DepAProps) {
  return (
    <StyledDepA>
      <h1>Welcome to DepA!</h1>
    </StyledDepA>
  );
}

export default DepA;
