import { useEffect } from 'react';
import { useTodos } from '../hooks/useTodos';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { FilterSelector } from '../components/FilterSelector';
import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';
import { LoginForm } from '../components/LoginForm';
import { ThemeToggle } from '../components/ThemeToggle';

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
  const { theme, toggleTheme } = useTheme();

  // ★ body にテーマクラスを反映（dark-theme / light-theme）
  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  if (!user) {
    return (
      <div>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <h2>ログインしてください</h2>
        <LoginForm onLogin={login} />
      </div>
    );
  }

  return (
    <div>
      <div className="user-info">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <button className="logout-button" onClick={logout}>ログアウト</button>
      </div>
      <p>ようこそ、{user} さん！</p>
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
