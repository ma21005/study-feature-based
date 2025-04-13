type Props = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

export const ThemeToggle = ({ theme, onToggle }: Props) => {
  return (
    <button className="theme-toggle-button" onClick={onToggle}>
      背景色を{theme === 'light' ? 'ダーク' : 'ライト'}に変更
    </button>
  );
};
