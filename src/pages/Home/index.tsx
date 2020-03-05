import React, { useState } from 'react';
import { MdAddCircle, MdClose, MdAdd } from 'react-icons/md';
import colors from '../../styles/colors';
import Constants from '../../constants';
import {
  Container,
  Wrapper,
  Author,
  Person,
  Title,
  Content,
  SubTitle,
  Filters,
  Todo,
  CreatedAt,
  Calendar,
  Footer,
  Modal,
  Button,
  Input,
} from './styles';

const Home: React.FC = () => {
  const [todos, setTodos] = useState(Constants);
  const [modalState, setModalState] = useState(false);
  const handleModalState = (params: boolean) => {
    setModalState(params);
  };
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
          <Button onClick={() => handleModalState(true)}>
            <MdAddCircle color="#331CBF" size={40} />
          </Button>
        </Footer>
      </Wrapper>
      <Modal
        title=" Write down your goal "
        footer={[]}
        visible={modalState}
        onCancel={() => handleModalState(false)}
      >
        <Input
          suffix={
            <Button>
              <MdAdd color="#331CBF" size={20} />
            </Button>
          }
        />
      </Modal>
    </Container>
  );
};

export default Home;
