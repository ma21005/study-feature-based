import { LoginForm, useAuth } from '../features/auth';
import { TodoForm } from '../features/todos';
import { ThemeToggle } from '../features/theme';

export const HomePage = () => {
  const { user, login, logout } = useAuth();

  return user ? (
    <>
      <div className="user-info">
        <ThemeToggle />
        <button className="logout-button" onClick={logout}>ログアウト</button>
      </div>
      <p>ようこそ、{user} さん！</p>
      <TodoForm />
    </>
  ) : (
    <>
      <ThemeToggle />
      <LoginForm onLogin={login} />
    </>
  );
};
