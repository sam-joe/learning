import styled from "styled-components";

export const HeaderWrapper = styled.header<{ loggedin: boolean }>`
  min-height: 5rem;
  max-height: 5rem;
  background-color: var(--${(p) => (p.loggedin ? "primary" : "secondary")});
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
`;
