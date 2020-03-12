import React, { useState, useRef } from 'react';
import { MdClose, MdAdd } from 'react-icons/md';
import { Button } from 'antd';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import colors from '../../styles/colors';
import Constants from '../../constants';
import Input from '../../components/Input';
import {
  Container,
  Wrapper,
  Author,
  Person,
  Title,
  Content,
  SubTitle,
  FilterContainer,
  Todo,
  CreatedAt,
  Calendar,
  Footer,
  Modal,
  AddButton,
  Filter,
} from './styles';

type Todo = {
  id: number;
  title: string;
  createdAt: string;
  done: boolean;
};

interface FormData {
  todo: Object;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(Constants);
  const [modalState, setModalState] = useState<boolean>(false);

  const setNewTodo = (todo: any) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: todo,
        createdAt: new Date().toISOString(),
        done: false,
      },
    ]);
  };
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = data => {
    setNewTodo(data.todo);
    setModalState(false);
  };
  return (
    <Container>
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

            {/* //TODO: make a different states for To-do */}
            <FilterContainer>
              <Filter onClick={() => {}} active={false}>
                <p>To-do</p>
              </Filter>
              <Filter onClick={() => {}} active={false}>
                <p>All</p>
              </Filter>
              <Filter onClick={() => {}} active={false}>
                <p>Done</p>
              </Filter>
            </FilterContainer>

            {todos.map(todo => (
              <Todo key={todo.id}>
                <p>{todo.title}</p>
                <CreatedAt>
                  <small>{todo.createdAt}</small>
                  <Calendar color={colors.DarkGray} />
                  <MdClose color="#F56A6A" />
                </CreatedAt>
              </Todo>
            ))}
          </Content>
        </div>
        <Footer>
          <AddButton onClick={() => setModalState(true)}>
            <MdAdd color="#fff" size={28} />
          </AddButton>
        </Footer>
      </Wrapper>
      <Modal
        title="Write down your goal"
        footer={[]}
        visible={modalState}
        onCancel={() => setModalState(false)}
      >
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="todo" />
          <Button type="default" htmlType="submit">
            <MdAdd color="#331CBF" size={20} />
          </Button>
        </Form>
      </Modal>
    </Container>
  );
};

export default Home;
