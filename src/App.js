import './App.css';
import { useState } from 'react';
import './styles/todo.css';
import Todo from './components/Todo';
import List  from './components/List';
function App() {
  const [editformvisibility,seteditformvisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');
  const handleedit=(todo)=>{
    seteditformvisibility(true);
    setEditTodo(todo);
  }
  const cancelUpdate=()=>{
    seteditformvisibility(false);
  }
  return (
    <div >
         <div className="container max-auto">
    <div className='flex justify-center items-center h-screen'>
        <div className='glass'>
        <div className="title flex flex-col items-center">
          <div className='mt-6'> <Todo  cancelUpdate={cancelUpdate} editformvisibility={editformvisibility} editTodo={editTodo}/></div>
   <span className='mt-6'><List handleedit={handleedit}  editformvisibility={editformvisibility}  /></span>
   </div>
        </div>
    </div>
   </div>
    </div>
  );
}

export default App;
