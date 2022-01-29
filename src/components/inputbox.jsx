import React, { useEffect, useRef, useState } from 'react';
import './inputbox.css';

const Inputbox = (props) => {
  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState([]);
  const [retouch, setRetouch] = useState(false);
  // const clickEvent = () => setTodolist(todolist.push({ todo }));
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    setTodo('');
    setTodolist((currentArray) => [todo, ...currentArray]);
    box_arr.forEach((item) => {
      if (item.classList.contains('show')) {
        item.classList.remove('show');
      }
    });
  };

  //삭제 함수
  const deleteBtn = (event) => {
    console.log(event.target.parentNode.id);
    let listId = event.target.parentNode.id;
    todolist.splice(listId, 1);
    const list = [...todolist];
    setTodolist(list);
  };

  //수정 함수
  const getList = useRef(null);
  const box_arr = document.querySelectorAll('.retouchBox');
  const retouchBtn = (event) => {
    let active = retouch === false ? true : false;
    setRetouch(active);
    if (retouch === false) {
      setRetouch(true);
      box_arr[event.target.parentNode.id].classList.add('show');
      box_arr[event.target.parentNode.id].classList.remove('hide');
    } else {
      setRetouch(false);
      box_arr[event.target.parentNode.id].classList.add('hide');
      box_arr[event.target.parentNode.id].classList.remove('show');
      todolist[event.target.parentNode.id] =
        box_arr[event.target.parentNode.id].value;
    }
  };

  const pushList = todolist.map((item, index) => (
    <li ref={getList} className='todo_list' id={index} key={index}>
      {item}
      <input type='text' className='retouchBox' />
      <button onClick={retouchBtn}>retouch</button>
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
