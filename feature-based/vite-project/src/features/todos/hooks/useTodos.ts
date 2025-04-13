import { useState } from 'react';
import { Todo, Filter } from '../types';

export const useTodos = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleSubmit = () => {
    if (!text) return;
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      checked: false,
      removed: false,
    };
    setTodos((todos) => [newTodo, ...todos]);
    setText('');
  };

  const handleEdit = (id: number, value: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, value } : todo))
    );
  };

  const handleCheck = (id: number, checked: boolean) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, checked } : todo))
    );
  };

  const handleRemove = (id: number, removed: boolean) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, removed } : todo))
    );
  };

  const handleFilter = (filter: Filter) => setFilter(filter);

  const handleEmpty = () => {
    setTodos((todos) => todos.filter((todo) => !todo.removed));
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'all': return !todo.removed;
      case 'checked': return todo.checked && !todo.removed;
      case 'unchecked': return !todo.checked && !todo.removed;
      case 'removed': return todo.removed;
      default: return todo;
    }
  });

  return {
    text,
    todos,
    filter,
    filteredTodos,
    handleChange,
    handleSubmit,
    handleEdit,
    handleCheck,
    handleRemove,
    handleFilter,
    handleEmpty,
  };
};
