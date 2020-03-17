import styled, { css } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { Form as Unform } from '@unform/web';
import { Modal as AntdModal } from 'antd';
import { MdEventAvailable } from 'react-icons/md';
import CheckBoxAnimated from 'react-animated-checkbox';
import colors from '../../styles/colors';

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

export const Todo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  line-height: 23px;
  margin-bottom: 10px !important;
  p {
    margin-bottom: 0;
  }
`;

export const Footer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled(AntdModal)`
  .ant-modal-close-x {
    display: none;
  }
  .ant-modal-content {
    width: 100%;
    max-width: 757px;
    max-height: 204px;
  }
  .ant-modal-header {
    border-bottom: 1px solid transparent;
  }
  border-bottom: none;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 29px;
    color: ${colors.Blue};
  }

  .ant-modal-footer {
    border-top: none;
  }
  .ant-modal-body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;
    width: 100%;
    form {
      width: 100%;
    }
    .ant-input {
      border: none;
      border-bottom: 1px solid #26158f;
      border-radius: 0;
    }
  }
`;
export const TodoName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  p {
    margin-left: 8px;
  }
`;
export const Form = styled(Unform)`
  display: flex;
  width: 100%;
  max-width: 638px !important;
  border-bottom: 1px solid #26158f;
  button {
    border: none;
    background: none;
  }
`;
export const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background: ${colors.Blue};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
`;
export const CreatedAt = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  small {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: ${colors.DarkGray};
  }
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background: none;
    margin-right: 10px;
  }
`;
export const Calendar = styled(MdEventAvailable)`
  margin: 0 10px 0 5px;
`;
export const TodoContent = styled(Scrollbars)``;

export const CheckBox = styled(CheckBoxAnimated)``;
