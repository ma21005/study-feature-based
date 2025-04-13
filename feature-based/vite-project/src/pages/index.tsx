import { AuthFeature, useAuth } from '../features/auth';
import { TodoFeature } from '../features/todos';

export const HomePage = () => {
  const { user, login, logout } = useAuth();

  return user ? (
    <TodoFeature username={user} onLogout={logout} />
  ) : (
    <AuthFeature onLogin={login} />
  );
};
