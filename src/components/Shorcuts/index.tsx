import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboard } from 'react-icons/md';

type TVisible = {
  visible: boolean;
};

export const Container = styled.div`
  display: flex;
  /* position: fixed; */
`;

export const Wrapper = styled.div<TVisible>`
  display: ${props => (props.visible ? 'flex' : 'none')};
  padding: 14px;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 158px;
  height: 142px;
  right: 70px;
  top: 19px;
  background: #fbfcff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
`;

export const KeyContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  &:nth-of-type(4) {
    margin-bottom: 0;
  }
`;
export const Key = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #331cbf;
  width: 17px;
  height: 18px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  margin-bottom: 0;
  color: #fff;
`;
export const KeyFunction = styled.div`
  margin-left: 10px;
  font-size: 10px;
  line-height: 13px;
  color: #a9aab6;
`;

export const IconContainer = styled.div`
  position: fixed;
  right: 50px;
  top: 15px;
`;

export default function Shorcuts() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <IconContainer>
        <MdKeyboard onClick={() => toggleVisible()} />
      </IconContainer>
      <Wrapper visible={visible}>
        <KeyContent>
          <Key>;</Key>
          <KeyFunction>Add new todo</KeyFunction>
        </KeyContent>
        <KeyContent>
          <Key>D</Key>
          <KeyFunction>Toggle Done Panel</KeyFunction>
        </KeyContent>
        <KeyContent>
          <Key>A</Key>
          <KeyFunction>Toggle All Panel</KeyFunction>
        </KeyContent>
        <KeyContent>
          <Key>T</Key>
          <KeyFunction>Toggle To-do Panel</KeyFunction>
        </KeyContent>
      </Wrapper>
    </>
  );
}
