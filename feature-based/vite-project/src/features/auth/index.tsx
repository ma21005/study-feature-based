import { useAuth } from './hooks/useAuth';
import { LoginForm } from './components/LoginForm';

type Props = {
  onLogin: (username: string) => void;
};

export const AuthFeature = ({ onLogin }: Props) => {
  return (
    <div>
      <h2>ログインしてください</h2>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export { useAuth };
