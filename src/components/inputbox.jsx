import React, { useState } from 'react';

const Inputbox = (props) => {
  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState([]);
  // const clickEvent = () => setTodolist(todolist.push({ todo }));
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    setTodo('');
    setTodolist((currentArray) => [todo, ...currentArray]);
  };
  console.log(todolist);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type='text'
          placeholder='what to do'
        ></input>
        <button>enter</button>
      </form>
      <ul>
        {todolist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inputbox;
