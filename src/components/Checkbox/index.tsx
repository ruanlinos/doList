import React, { useState } from 'react';
import { MdCheck } from 'react-icons/md';
import { GoDash } from 'react-icons/go';
import { Container, Wrapper, Paragraph } from './styles';

export default function Home() {
  const [state, set] = useState(false);

  return (
    <Container>
      <Wrapper active={state}>
        <MdCheck />
        <GoDash size="15" className="dash" />
        <Paragraph onClick={() => set(!state)} active={state}>
          Cookies
        </Paragraph>
      </Wrapper>
    </Container>
  );
}
