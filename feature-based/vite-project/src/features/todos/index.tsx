import { useTodos } from './hooks/useTodos';
import { FilterSelector } from './components/FilterSelector';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

export const TodoFeature = () => {
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
