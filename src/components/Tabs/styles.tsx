import styled, { css } from 'styled-components';

interface ButtonProps {
  active: boolean;
}

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 56px 0;
  p {
    margin-bottom: 0 !important;
  }
`;

export const Filter = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  background: none;
  border: none;
  p {
    font-weight: bold;
  }
  &:nth-child(2) {
    margin: 0 50px;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: #331cbf;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.75s cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover {
    ::after {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
  ${props =>
    props.active &&
    css`
      &::after {
        transform-origin: left;
        transform: scaleX(1);
      }
    `}
`;
