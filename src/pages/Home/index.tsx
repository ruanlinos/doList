import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAddCircle, MdClose, MdEventAvailable } from 'react-icons/md';
import colors from '../../styles/colors';
import Constants from '../../constants';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Wrapper = styled.div`
  max-width: 600px;
`;
const Title = styled.h1`
  margin: 30px 0 20px 0;
`;
const SubTitle = styled.h2``;

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
  }
`;
export const Content = styled.div``;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
const Calendar = styled(MdEventAvailable)`
  margin: 0 20px 0 5px;
`;
const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 56px 0;
  p {
    &:nth-child(2) {
      margin: 0 50px;
    }
  }
`;
const Home: React.FC = () => {
  const [todos, setTodos] = useState(Constants);

  return (
    <Container>
      <Wrapper>
        <Author>
          Created by
          <Person>
            <p>Ruan Linos</p>
          </Person>
        </Author>
        <Title>Keep productivity with DoList</Title>
        <Content>
          <SubTitle>Tasks</SubTitle>
          <Filters>
            <p>To-do</p>
            <p>All</p>
            <p>Done</p>
          </Filters>
          {todos.map(todo => (
            <Todo>
              <p>{todo.title}</p>
              <CreatedAt>
                <small>{todo.createdAt}</small>
                <Calendar color={colors.DarkGray} />
                <MdClose color="#F56A6A" />
              </CreatedAt>
            </Todo>
          ))}
        </Content>
        <Footer>
          <MdAddCircle color="#331CBF" size={40} />
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Home;
