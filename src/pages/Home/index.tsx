import React from 'react';

import { Tabs } from '../../components/Tabs';

import {
  Container,
  Wrapper,
  Author,
  Person,
  Title,
  Content,
  SubTitle,
} from './styles';
import Shorcuts from '../../components/Shorcuts';

export type TTodo = {
  id: number;
  title: string;
  createdAt: Date;
  done: boolean;
};

const Home: React.FC = () => {
  return (
    <Container>
      <Shorcuts />
      <Wrapper>
        <div>
          <Author>
            Created by
            <Person>
              <p>Ruan Linos</p>
            </Person>
          </Author>
          <Title>Keep productivity with DoList</Title>
          <Content>
            <SubTitle>Tasks</SubTitle>
            <Tabs />
          </Content>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Home;
