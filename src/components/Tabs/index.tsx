import React, { useState, useEffect } from 'react';
import { FilterContainer, Filter } from './styles';
import useKeyPress from '../../hooks/useKeyPress';
import { TTodo } from '../../pages/Home';

type TTab = 'all' | 'todo' | 'done';

export const Tabs: React.FC<TTabsProps> = ({ all, todo, done }) => {
  const [tabs, setTabs] = useState<TTab>('all');
  const keyDone = useKeyPress('d');
  const keyAll = useKeyPress('a');
  const keyTodo = useKeyPress('t');

  useEffect(() => {
    keyDone && setTabs('done');
    keyAll && setTabs('all');
    keyTodo && setTabs('todo');
  }, [keyDone, keyAll, keyTodo]);

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
      {tabs === 'todo' && <h1>H1</h1>}
      {tabs === 'all' && <h1>all</h1>}
      {tabs === 'done' && <h1>done</h1>}
    </>
  );
};

export type TTabsProps = {
  all: TTodo[];
  done: TTodo[];
  todo: TTodo[];
};
