import { useTodos } from './hooks/useTodos';
import { FilterSelector } from './components/FilterSelector';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

type Props = {
  username: string;
  onLogout: () => void;
};

export const TodoFeature = ({ username, onLogout }: Props) => {
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
      <div className="user-info">
        <p>ようこそ、{username} さん！</p>
        <button onClick={onLogout}>ログアウト</button>
      </div>
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
