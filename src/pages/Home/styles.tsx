import styled from 'styled-components';
import { MdEventAvailable } from 'react-icons/md';
import { Modal as AntdModal, Input as AntdInput } from 'antd';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Wrapper = styled.div`
  max-width: 600px;
`;
export const Title = styled.h1`
  margin: 30px 0 20px 0;
`;
export const SubTitle = styled.h2``;

export const Author = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.DarkGray};
`;
export const Person = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 31px;
  border: 3px solid #eae9f2;
  box-sizing: border-box;
  border-radius: 34px;
  margin-left: 6px;
  p {
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #45475d;
    margin-bottom: 0;
  }
`;
export const Content = styled.div``;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 40px;
    height: 40px;
    border: none;
    background: none !important;
  }
`;
export const Todo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
  }
`;
export const CreatedAt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  small {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: ${colors.DarkGray};
  }
`;
export const Calendar = styled(MdEventAvailable)`
  margin: 0 20px 0 5px;
`;
export const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 56px 0;
  p {
    &:nth-child(2) {
      margin: 0 50px;
    }
  }
`;

export const Modal = styled(AntdModal)`
  .ant-modal-close-x {
    display: none;
  }
  .ant-modal-content {
    top: 25rem;
  }
  .ant-modal-header {
    border-bottom: none;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: bold;
      font-size: 23px;
      line-height: 29px;
      color: ${colors.Blue};
    }
  }
  .ant-modal-footer {
    border-top: none;
  }
  .ant-modal-body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;
    .ant-input {
      border: none;
      border-bottom: 1px solid #26158f;
      border-radius: 0;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background: none;
  border: none;
`;

export const Input = styled(AntdInput)``;
