import { useState } from 'react';

type Props = {
  onLogin: (username: string) => void;
};

export const LoginForm = ({ onLogin }: Props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === 'user' && password === '11111') {
      onLogin(name);
      setName('');
      setPassword('');
      setError('');
    } else {
      setError('ユーザー名またはパスワードが間違っています');
    }
  };

  return (
    <>
      <div>
      <h2>ログインしてください</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="ユーザー名"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">ログイン</button>
        </form>
      </div>
    </>
  );
};
