import React, { useRef, useState } from 'react';

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

  //삭제 함수
  const deleteBtn = (event) => {
    console.log(event.target.parentNode.id);
    let listId = event.target.parentNode.id;
    todolist.splice(listId, 1);
    const list = [...todolist];
    setTodolist(list);
  };

  const pushList = todolist.map((item, index) => (
    <li className='todo_list' id={index} key={index}>
      {item}
      <button onClick={deleteBtn}>delete</button>
    </li>
  ));

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
      <ul>{pushList}</ul>
    </div>
  );
};

export default Inputbox;
