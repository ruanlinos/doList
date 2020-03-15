/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect } from 'react';
import createPersistedState from 'use-persisted-state';
import { Scrollbars } from 'react-custom-scrollbars';
import QueueAnim from 'rc-queue-anim';
import * as R from 'ramda';
import { MdClose, MdEventAvailable, MdAdd } from 'react-icons/md';
import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import { Modal as AntdModal } from 'antd';
import CheckBoxAnimated from 'react-animated-checkbox';
import formatDistance from 'date-fns/formatDistance';
import * as Yup from 'yup';
import { SubmitHandler, FormHandles } from '@unform/core';
import Input from '../Input';
import Constants from '../../constants';
import { FilterContainer, Filter } from './styles';
import useKeyPress from '../../hooks/useKeyPress';
import { TTodo } from '../../pages/Home';
import colors from '../../styles/colors';

type TTab = 'all' | 'todo' | 'done';

export const Todo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  line-height: 23px;
  margin-bottom: 10px !important;
  p {
    margin-bottom: 0;
  }
`;

export const Footer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled(AntdModal)`
  .ant-modal-close-x {
    display: none;
  }
  .ant-modal-content {
    width: 100%;
    max-width: 757px;
    max-height: 204px;
  }
  .ant-modal-header {
    border-bottom: 1px solid transparent;
  }
  border-bottom: none;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 29px;
    color: ${colors.Blue};
  }

  .ant-modal-footer {
    border-top: none;
  }
  .ant-modal-body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;
    width: 100%;
    form {
      width: 100%;
    }
    .ant-input {
      border: none;
      border-bottom: 1px solid #26158f;
      border-radius: 0;
    }
  }
`;
export const TodoName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  p {
    margin-left: 8px;
  }
`;
export const Form = styled(Unform)`
  display: flex;
  width: 100%;
  max-width: 638px !important;
  border-bottom: 1px solid #26158f;
  button {
    border: none;
    background: none;
  }
`;
export const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background: ${colors.Blue};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
`;
export const CreatedAt = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  small {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: ${colors.DarkGray};
  }
  button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    margin-right: 10px;
  }
`;
export const Calendar = styled(MdEventAvailable)`
  margin: 0 10px 0 5px;
`;
export const TodoContent = styled(Scrollbars)``;

export const CheckBox = styled(CheckBoxAnimated)``;

export const Tabs: React.FC = () => {
  const useCounterState = createPersistedState('todos');
  const formRef = useRef<FormHandles>(null);
  const nameInput = formRef.current?.getFieldRef('todo');
  const [todos, setTodos] = useCounterState<TTodo[]>(Constants);
  const createdAtSort = R.sortWith([R.ascend(R.prop('createdAt'))]);
  const [modalState, setModalState] = useState<boolean>(false);
  const filterTodo = todos.filter(todo => todo.done === false);
  const filterDone = todos.filter(todo => todo.done === true);

  const keyAdd = useKeyPress('Control');

  useEffect(() => {
    keyAdd && setModalState(!modalState);
  }, [keyAdd]); //eslint-disable-line

  useEffect(() => {
    nameInput?.focus();
  }, [modalState, nameInput]);

  const handleModalState = () => {
    modalState && setModalState(!modalState);
    formRef.current?.reset();
  };

  const setNewTodo = (todo: string) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        title: todo,
        createdAt: new Date(),
        done: false,
      },
    ]);
  };

  function toggleTodoState(id: number) {
    const filteredTodo = todos.filter(todo => todo.id === id)[0];
    const toggleState = { ...filteredTodo, done: !filteredTodo.done };

    const filteredDone = todos.filter(todo => todo.id !== id);
    const newArray = [...filteredDone, toggleState];
    const sortedArray: any = createdAtSort(newArray);

    setTodos(sortedArray);
  }
  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleSubmit: SubmitHandler<FormData> = async (data: any) => {
    try {
      const schema = Yup.object().shape({
        todo: Yup.string().required(`the field cannot be empty`),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setNewTodo(data?.todo);
      setModalState(false);
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
  const [tabs, setTabs] = useState<TTab>('all');

  const keyDone = useKeyPress('d');
  const keyAll = useKeyPress('a');
  const keyTodo = useKeyPress('t');

  useEffect(() => {
    if (!modalState) {
      keyDone && setTabs('done');
      keyAll && setTabs('all');
      keyTodo && setTabs('todo');
    }
  }, [keyAll, keyDone, keyTodo, modalState]);

  return (
    <>
      <FilterContainer>
        <Filter onClick={() => setTabs('todo')} active={tabs === 'todo'}>
          <p>To-do</p>
        </Filter>
        <Filter onClick={() => setTabs('all')} active={tabs === 'all'}>
          <p>All</p>
        </Filter>
        <Filter onClick={() => setTabs('done')} active={tabs === 'done'}>
          <p>Done</p>
        </Filter>
      </FilterContainer>
      <TodoContent style={{ width: 593, height: 300 }} autoHide>
        <QueueAnim>
          {tabs === 'todo' &&
            filterTodo &&
            filterTodo.map(todo => (
              <Todo key={todo.id}>
                <TodoName>
                  <CheckBox
                    checked={todo.done}
                    checkBoxStyle={{
                      checkedColor: '#26158f',
                      size: 15,
                      unCheckedColor: '#b8b8b8',
                    }}
                    duration={400}
                    onClick={() => toggleTodoState(todo.id)}
                  />

                  <p>{todo.title}</p>
                </TodoName>
                <CreatedAt>
                  <small>
                    {formatDistance(new Date(todo.createdAt), new Date())}
                  </small>
                  <Calendar color={colors.DarkGray} />
                  <button onClick={() => removeTodo(todo.id)} type="button">
                    <MdClose color="#F56A6A" />
                  </button>
                </CreatedAt>
              </Todo>
            ))}
        </QueueAnim>
        <QueueAnim>
          {tabs === 'all' &&
            todos &&
            todos.map(todo => (
              <Todo key={todo.id}>
                <TodoName>
                  <CheckBox
                    checked={todo.done}
                    checkBoxStyle={{
                      checkedColor: '#26158f',
                      size: 15,
                      unCheckedColor: '#b8b8b8',
                    }}
                    duration={400}
                    onClick={() => toggleTodoState(todo.id)}
                  />

                  <p>{todo.title}</p>
                </TodoName>
                <CreatedAt>
                  <small>
                    {formatDistance(new Date(todo.createdAt), new Date())}
                  </small>
                  <Calendar color={colors.DarkGray} />
                  <button onClick={() => removeTodo(todo.id)} type="button">
                    <MdClose color="#F56A6A" />
                  </button>
                </CreatedAt>
              </Todo>
            ))}
        </QueueAnim>
        <QueueAnim>
          {tabs === 'done' &&
            filterDone &&
            filterDone.map(todo => (
              <Todo key={todo.id}>
                <TodoName>
                  <CheckBox
                    checked={todo.done}
                    checkBoxStyle={{
                      checkedColor: '#26158f',
                      size: 15,
                      unCheckedColor: '#b8b8b8',
                    }}
                    duration={400}
                    onClick={() => toggleTodoState(todo.id)}
                  />

                  <p>{todo.title}</p>
                </TodoName>
                <CreatedAt>
                  <small>
                    {formatDistance(new Date(todo.createdAt), new Date())}
                  </small>
                  <Calendar color={colors.DarkGray} />
                  <button onClick={() => removeTodo(todo.id)} type="button">
                    <MdClose color="#F56A6A" />
                  </button>
                </CreatedAt>
              </Todo>
            ))}
        </QueueAnim>
      </TodoContent>
      <Footer>
        <AddButton onClick={() => handleModalState()}>
          <MdAdd color="#fff" size={28} onClick={() => setModalState(true)} />
        </AddButton>
      </Footer>
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
    </>
  );
};
