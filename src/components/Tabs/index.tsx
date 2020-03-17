/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect } from 'react';
import createPersistedState from 'use-persisted-state';
import QueueAnim from 'rc-queue-anim';
import * as R from 'ramda';
import { MdClose, MdAdd } from 'react-icons/md';
import formatDistance from 'date-fns/formatDistance';
import * as Yup from 'yup';
import { SubmitHandler, FormHandles } from '@unform/core';
import Input from '../Input';
import Constants from '../../constants';
import {
  FilterContainer,
  Filter,
  Todo,
  Footer,
  Modal,
  TodoName,
  Form,
  AddButton,
  CreatedAt,
  Calendar,
  TodoContent,
  CheckBox,
} from './styles';
import useKeyPress from '../../hooks/useKeyPress';
import { TTodo } from '../../pages/Home';
import colors from '../../styles/colors';

type TTab = 'all' | 'todo' | 'done';

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
