import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // body にクラスを適用（light-theme / dark-theme）
  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      背景色を{theme === 'light' ? 'ダーク' : 'ライト'}に変更
    </button>
  );
};