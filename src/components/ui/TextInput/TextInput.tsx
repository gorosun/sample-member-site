import { ChangeEvent, FC, memo, useState } from 'react';

const TextInput: FC = memo(() => {
  const [text, setText] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        aria-label="Text Input"
      />
      <p>Entered Text: {text}</p>
    </div>
  );
});

TextInput.displayName = 'TextInput'; // Display nameを明示的に設定
export { TextInput };
