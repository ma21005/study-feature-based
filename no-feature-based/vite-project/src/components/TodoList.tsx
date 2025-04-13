import React from 'react';
import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  onEdit: (id: number, value: string) => void;
  onCheck: (id: number, checked: boolean) => void;
  onRemove: (id: number, removed: boolean) => void;
};

export const TodoList: React.FC<Props> = ({ todos, onEdit, onCheck, onRemove }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onCheck={onCheck}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};
