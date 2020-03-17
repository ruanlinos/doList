import React, { useState } from 'react';
import { MdKeyboard } from 'react-icons/md';
import { Wrapper, KeyContent, Key, KeyFunction, IconContainer } from './styles';

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
