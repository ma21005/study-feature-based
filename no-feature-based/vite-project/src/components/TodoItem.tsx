import React from 'react';
import { Todo } from '../types/todo';

type Props = {
  todo: Todo;
  onEdit: (id: number, value: string) => void;
  onCheck: (id: number, checked: boolean) => void;
  onRemove: (id: number, removed: boolean) => void;
};

export const TodoItem: React.FC<Props> = ({ todo, onEdit, onCheck, onRemove }) => {
  return (
    <li>
      <input
        type="checkbox"
        disabled={todo.removed}
        checked={todo.checked}
        onChange={() => onCheck(todo.id, !todo.checked)}
      />
      <input
        type="text"
        disabled={todo.checked || todo.removed}
        value={todo.value}
        onChange={(e) => onEdit(todo.id, e.target.value)}
      />
      <button onClick={() => onRemove(todo.id, !todo.removed)}>
        {todo.removed ? '復元' : '削除'}
      </button>
    </li>
  );
};
