
import React from 'react'
import '../styles/todo.css';
import { addTodo, handleEditSubmit } from '../redux/todoapp/actions/index';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
export default function Todo({editformvisibility,editTodo,cancelUpdate}){
  const dispatch = useDispatch();
  const todo=useSelector((state)=>state.operationsReducer);
  console.log(todo);
  const [todovalue, settodovalue]=useState('');
  const [editValue, setEditValue]=useState('');
  useEffect(()=>{
    setEditValue(editTodo.todo);
  },[editTodo])

  const handlesubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todovalue,
          completed: false
      }
      settodovalue('');
      dispatch(addTodo(todoObj))
  }
  const editSubmit = (e) =>{
    e.preventDefault();
    let editedObj={
      id: editTodo.id,
      todo: editValue,
      completed: false
    }
    dispatch(handleEditSubmit(editedObj));
  }
  return (
   <>
 {editformvisibility===true? (
  <>
   <h1 class="text-2xl font-bold text-slate-50 py-2">
   Update your todo-items
</h1>
  <form className='form-group custom-form'  onSubmit={editSubmit}>
  <div className='input-and-btn'>
    <input type="text" placeholder='Enter Movie Name'className='form-control mr-3' required value={editValue||""} onChange={(e)=>setEditValue(e.target.value)} />
    <button type="submit" className='btn text-slate-50'><EditIcon/></button>
  </div>
</form> 
<button type="button" className='back-btn'
        onClick={cancelUpdate}  >BACK</button>
</>
 ):(
  <>
  <h1 class="text-2xl font-bold text-slate-50 py-2">
  Add your todo-items
</h1>
  <form className='form-group custom-form'onSubmit={handlesubmit}  >
      <div className='input-and-btn '>
        <input type="text" placeholder='Enter Movie Name'className='form-control mr-3' required value={todovalue} onChange={(e)=>settodovalue(e.target.value)}
          />
        <button type="submit" className='btn text-slate-50'><AddIcon/></button>
      </div>
    </form> 
    </>
 )
 }
 </>
  );
}