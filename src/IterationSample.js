import { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'test1' },
    { id: 2, text: 'test2' },
    { id: 3, text: 'test3' },
    { id: 4, text: 'test4' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onClick = (e) => {
    const nextNames = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li
      onDoubleClick={() => {
        onRemove(name.id);
      }}
      key={name.id}
    >
      {name.text}
    </li>
  ));
  return (
    <>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>Add</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
