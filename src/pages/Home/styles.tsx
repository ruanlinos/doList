import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 0 20px;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column-reverse;
    padding: 1rem;
  }
`;
