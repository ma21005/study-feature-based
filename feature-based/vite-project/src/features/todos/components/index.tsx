import { useTodos } from '../hooks/useTodos';
import { FilterSelector } from './FilterSelector';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export const TodoForm = () => {
  const {
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
  } = useTodos();

  return (
    <div>
      <FilterSelector
        filter={filter}
        todos={todos}
        onFilterChange={handleFilter}
        onEmpty={handleEmpty}
      />
      {filter !== 'removed' && filter !== 'checked' && (
        <TodoInput text={text} onChange={handleChange} onSubmit={handleSubmit} />
      )}
      <TodoList
        todos={filteredTodos}
        onEdit={handleEdit}
        onCheck={handleCheck}
        onRemove={handleRemove}
      />
    </div>
  );
};
