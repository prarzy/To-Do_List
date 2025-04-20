import { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [todolist, setTodolist] = useState([]);

  const addItem = () => {
    if (todolist.length >= 8) {
      alert("You can only add up to 8 tasks!");
      return;
    }
    if (item.trim() !== '') {
      setTodolist([...todolist, { text: item, completed: false }]);
    }
    setItem('');
  };

  const changeInput = (e) => {
    setItem(e.target.value);
  };

  const removeItem = (removedItem) => {
    setTodolist(todolist.filter(item => item !== removedItem));
  };

  const done = (index) => {
    setTodolist(prevItems =>
      prevItems.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-10 m-4 bg-[#8e615b] border-none box-border rounded-[8px]">
      <div className="w-[60%] max-w-[700px] p-[20px] my-[20px] mx-auto border box-border border-[#333] rounded-[8px] bg-[#f6dbca] shadow-md flex flex-col gap-[20px] text-[18px]">
        <h2 className="text-center text-[#2e0b0b] font-bold bg-[#f6dbca] shadow-sm text-shadow mb-[20px]">
          To-Do List 📝
        </h2>
  
        <div className="flex items-center gap-[10px] justify-between pl-[10px] pr-[10px]">
          <input
            type="text"
            placeholder="Please enter tasks..."
            value={item}
            onChange={changeInput}
            className="text-[#4d4d4d] bg-white text-[18px] w-full p-[12px_15px] rounded-[5px] border-none box-border"
          />
          <button
            onClick={addItem}
            className="bg-[#366346] hover:bg-[#203320] flex-shrink-0 text-white border-none rounded-[5px] text-center cursor-pointer p-[12px_20px] text-[18px] mr-[10px]"
          >
            Add
          </button>
        </div>
  
        <ul className="list-none p-[20px] text-black h-[300px] rounded-[5px] bg-[#d0a3a3] overflow-auto flex flex-col gap-[5px]">
          {todolist.map((item, index) => (
            <li
              key={index}
              onClick={() => done(index)}
              className={`border border-black p-[12px_20px] text-[20px] rounded-[5px] flex justify-between items-center font-bold ${
                item.completed ? "line-through bg-[#6c6464]" : "bg-[#d0a3a3]"
              }`}
            >
              {item.text}
              <button
                className="border-none rounded-[5px] text-red-500 bg-black hover:bg-[#7e0101] text-center p-[12px_15px] text-[20px] cursor-pointer ml-[10px] mr-[10px]"
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(item);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}

export default App;

