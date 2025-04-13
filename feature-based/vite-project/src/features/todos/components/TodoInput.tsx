type Props = {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

export const TodoInput = ({ text, onChange, onSubmit }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input type="text" value={text} onChange={onChange} />
      <input type="submit" value="追加" />
    </form>
  );
};
