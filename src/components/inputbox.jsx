import React, { useEffect, useRef, useState } from 'react';
import './inputbox.css';

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
    console.log('hi');
    setTodo('');
    setTodolist((currentArray) => [todo, ...currentArray]);
    // box_arr.forEach((item) => {
    //   if (item.classList.contains('show')) {
    //     item.classList.remove('show');
    //   }
    // });
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

  const pushList = todolist.map((item, index) => (
    <li ref={getList} className='todo_list' id={index} key={index}>
      {item}

      <button onClick={deleteBtn} className='btns'>
        delete
      </button>
    </li>
  ));

  return (
    <div className='todoList-box'>
      <form onSubmit={onSubmit} className='input_box'>
        <input
          onChange={onChange}
          value={todo}
          type='text'
          placeholder='what to do'
          className='inputBox'
        ></input>
        <button className='inputBtn'>enter</button>
      </form>
      <ul className='listBox'>{pushList}</ul>
    </div>
  );
};

export default Inputbox;
