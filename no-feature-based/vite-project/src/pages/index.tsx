import { useTodos } from '../hooks/useTodos';
import { useAuth } from '../hooks/useAuth';
import { FilterSelector } from '../components/FilterSelector';
import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';
import { LoginForm } from '../components/LoginForm';

export const HomePage = () => {
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

  const { user, login, logout } = useAuth();

  if (!user) {
    return (
      <div>
        <h2>ログインしてください</h2>
        <LoginForm onLogin={login} />
      </div>
    );
  }

  return (
    <div>
      <div className="user-info">
        <p>ようこそ、{user} さん！</p>
        <button onClick={logout}>ログアウト</button>
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
