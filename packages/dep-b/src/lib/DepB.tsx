import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DepBProps {}

const StyledDepB = styled.div`
  color: pink;
`;

export function DepB(props: DepBProps) {
  return (
    <StyledDepB>
      <h1>Welcome to DepB!</h1>
    </StyledDepB>
  );
}

export default DepB;
