import { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [item,setItem]=useState('');
  const [todolist, setTodolist]=useState([]);


  const addItem=()=>{
    if (todolist.length >= 8) {
      alert("You can only add up to 8 tasks!");
      return;
    }
    if(item.trim()!==''){
      setTodolist([...todolist,{ text: item, completed: false }]);
    }
    setItem('');
  }
  const changeInput=(e)=>{
    setItem(e.target.value);
  }
  const removeItem=(removedItem)=>{
    setTodolist(todolist.filter(item=>item!==removedItem));
  }
  const done=(index)=>{
    setTodolist(prevItems => 
      prevItems.map((item, i) => 
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <>
    <div className='parent'>
      <div className='container'>
        <h2>To-Do List 📝</h2>
        <div className='inputbutton'>
          <input type='text' placeholder='Please enter tasks...' value={item} onChange={changeInput} />
          <button className='add' onClick={addItem}>Add</button>
        </div>
        <ul>
          {todolist.map((item, index) => (
            <li key={index} onClick={() => done(index)}
            className={item.completed ? "finished" : ""}>
              {item.text}
              <button className='remove' onClick={() => removeItem(item)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
