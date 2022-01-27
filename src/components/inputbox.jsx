import React, { useState } from 'react';

const Inputbox = (props) => {
  const [todo, setTodo] = useState('');
  const onChange = (event) => setTodo(event.target.value);
  console.log(todo);
  return (
    <div>
      <form>
        <input
          onChange={onChange}
          value={todo}
          type='text'
          placeholder='what to do'
        ></input>

        <button>enter</button>
      </form>
    </div>
  );
};

export default Inputbox;
