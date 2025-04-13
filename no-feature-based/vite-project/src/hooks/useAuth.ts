import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<string | null>(null);

  const login = (name: string) => {
    if (name.trim()) {
      setUser(name.trim());
    }
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};
