import { Todo } from '../types';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  onEdit: (id: number, value: string) => void;
  onCheck: (id: number, checked: boolean) => void;
  onRemove: (id: number, removed: boolean) => void;
};

export const TodoList = ({ todos, onEdit, onCheck, onRemove }: Props) => {
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
