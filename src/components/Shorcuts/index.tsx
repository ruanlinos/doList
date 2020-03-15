/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboard } from 'react-icons/md';

type TVisible = {
  visible: boolean;
};

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div<TVisible>`
  display: ${props => (props.visible ? 'flex' : 'none')};
  padding: 14px;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 158px;
  height: 142px;
  right: 74px;
  top: 29px;
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
  border-radius: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  margin-bottom: 0;
  color: #fff;
  padding: 5px;
  min-width: 27.23px;
`;
export const KeyFunction = styled.div`
  display: flex;
  width: 100%;
  margin-left: 10px;
  font-size: 11px;
  line-height: 13px;
  color: #a9aab6;
  justify-content: flex-start;
`;

export const IconContainer = styled.div`
  position: fixed;
  right: 50px;
  top: 25px;
`;

export default function Shorcuts() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <IconContainer>
        <MdKeyboard
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          color="#A9AAB6"
          size={20}
        />
      </IconContainer>
      <Wrapper visible={visible}>
        <KeyContent>
          <Key>Ctrl</Key>
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
