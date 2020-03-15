import React, { useState, useRef, useEffect } from 'react';
// import { MdClose, MdAdd } from 'react-icons/md';
import { MdAdd, MdKeyboard } from 'react-icons/md';
// import { Button } from 'antd';
import * as Yup from 'yup';
import { SubmitHandler, FormHandles } from '@unform/core';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import useKeyPress from '../../hooks/useKeyPress';
// import colors from '../../styles/colors';
import Constants from '../../constants';
import { Tabs } from '../../components/Tabs';

import Input from '../../components/Input';
import {
  Form,
  Container,
  Wrapper,
  Author,
  Person,
  Title,
  Content,
  SubTitle,
  // FilterContainer,
  // Todo,
  // CreatedAt,
  // Calendar,
  Footer,
  Modal,
  AddButton,
  // Filter,
  // CheckBox,
} from './styles';
import Shorcuts from '../../components/Shorcuts';

export type TTodo = {
  id: number;
  title: string;
  createdAt: Date;
  done: boolean;
};

interface FormData {
  todo: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [todos, setTodos] = useState<TTodo[]>(Constants);
  const [modalState, setModalState] = useState<boolean>(false);

  const keyAdd = useKeyPress(';');

  useEffect(() => {
    keyAdd && setModalState(!modalState);
  }, [keyAdd ]); //eslint-disable-line

  useEffect(() => {
    const nameInput = formRef.current?.getFieldRef('todo');
    nameInput?.focus();
  }, [modalState]);

  const handleModalState = () => {
    modalState && setModalState(!modalState);
    formRef.current?.reset();
  };

  // const setNewTodo = (todo: string) => {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: Math.random(),
  //       title: todo,
  //       createdAt: new Date(),
  //       done: false,
  //     },
  //   ]);
  // };

  // function toggleTodoState(id: number) {
  //   const filteredTodo = todos.filter(todo => todo.id === id)[0];
  //   const toggleState = { ...filteredTodo, done: !filteredTodo.done };
  //   const filteredDone = todos.filter(todo => todo.id !== id);

  //   setTodos([...filteredDone, toggleState]);
  //   // alterar estado do todo
  // }
  // const removeTodo = (id: number) => {
  //   setTodos(todos.filter(todo => todo.id !== id));
  // };

  const handleSubmit: SubmitHandler<FormData> = async data => {
    try {
      const schema = Yup.object().shape({
        todo: Yup.string().required(`the field cannot be empty`),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.reset();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        // @ts-ignore
        const errorMessages = {};
        error.inner.forEach((err: Yup.ValidationError) => {
          // @ts-ignore
          errorMessages[err.path] = err.message;
        });

        formRef.current?.setErrors(errorMessages);

        formRef.current?.reset();
      }
    }
  };

  // const toggleTabs = tabs => {
  //   switch (tabs) {
  //     case 'todo':
  //       return <h1>TODO </h1>;
  //       break;

  //     default:
  //       break;
  //   }
  // };
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
            <Tabs all={[]} done={[]} todo={[]} />
            {/* {todos.map(todo => (
              <Todo key={todo.id}>
                <CheckBox
                  checked={todo.done}
                  checkBoxStyle={{
                    checkedColor: '#34b93d',
                    size: 20,
                    unCheckedColor: '#b8b8b8',
                  }}
                  duration={400}
                  onClick={() => toggleTodoState(todo.id)}
                />
                <p>{todo.title}</p>
                <CreatedAt>
                  <small>{formatDistanceToNow(todo.createdAt)}</small>
                  <Calendar color={colors.DarkGray} />
                  <button onClick={() => removeTodo(todo.id)} type="button">
                    <MdClose color="#F56A6A" />
                  </button>
                </CreatedAt>
              </Todo>
            ))} */}
          </Content>
        </div>
        <Footer>
          <AddButton onClick={() => handleModalState()}>
            <MdAdd color="#fff" size={28} onClick={() => setModalState(true)} />
          </AddButton>
        </Footer>
      </Wrapper>
      <Modal
        title="Write down your goal"
        footer={[]}
        visible={modalState}
        onCancel={() => handleModalState()}
      >
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="todo" />
          <button type="submit">
            <MdAdd color="#331CBF" size={20} />
          </button>
        </Form>
      </Modal>
    </Container>
  );
};

export default Home;
