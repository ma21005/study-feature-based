import React from 'react';
import { Filter, Todo } from '../types/todo';

type Props = {
  filter: Filter;
  todos: Todo[];
  onFilterChange: (filter: Filter) => void;
  onEmpty: () => void;
};

export const FilterSelector: React.FC<Props> = ({
  filter,
  todos,
  onFilterChange,
  onEmpty,
}) => {
  return (
    <div>
      <select defaultValue={filter} onChange={(e) => onFilterChange(e.target.value as Filter)}>
        <option value="all">すべてのタスク</option>
        <option value="checked">完了したタスク</option>
        <option value="unchecked">現在のタスク</option>
        <option value="removed">ごみ箱</option>
      </select>
      {filter === 'removed' && (
        <button
          onClick={onEmpty}
          disabled={todos.filter((todo) => todo.removed).length === 0}
        >
          ごみ箱を空にする
        </button>
      )}
    </div>
  );
};
