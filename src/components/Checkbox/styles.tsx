import styled, { keyframes, css } from 'styled-components';

type TTypeActive = {
  active: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .icon {
    width: 1rem;
    opacity: 0;
    order: -1;
    transition: all 0.2s;
    transform: translateX(-100%);
    /&& path {
      stroke: red;
      stroke-width: 3px;
      fill: none;
      stroke: black;
    }
  }
`;

export const stroketrough = keyframes`
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translate(15px);
    }
  `;

export const Paragraph = styled.p<TTypeActive>`
  opacity: ${props => props.active && 0.5};
  position: relative;
  cursor: pointer;
  transition: all 0.75s;
  ::selection {
    background: none;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: black;
    bottom: 8px;
    left: -8px;
    width: 120%;
    height: 2px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  }
  ${props =>
    props.active &&
    css`
      animation: ${stroketrough} 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
      &::after {
        color: blue;
        transform: scaleX(1);
        transform-origin: left;
      }
    `}
`;

export const Wrapper = styled.div<TTypeActive>`
  display: flex;
  input {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 8px;
    transition: all 0.2s;
    position: relative;
    &:focus + .icon {
      opacity: 1;
      transform: translateX(0);
    }
    &:hover {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
  svg {
    opacity: 0;
    &.dash {
      opacity: 1;
    }
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    margin-right: 15px;
    color: blue;
    ${props =>
      props.active &&
      css`
        opacity: 1;
        transform: translateX(25px);
        color: blue;
        &.dash {
          transition: all 0.2s;
          transform: translateX(35px);
          opacity: 0;
        }
      `}
  }
`;
