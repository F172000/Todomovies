import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeTodo } from '../redux/todoapp/actions';

export default function List ({handleedit,editformvisibility}){
    const dispatch=useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);
  console.log(todos);
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box mt-6'>
         <div className='content mt-3'>
            <p className='text-slate-50'style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box mt-3'>
        {editformvisibility===false&&(
          <>
          <span onClick={()=>handleedit(todo)} className='text-slate-50'><EditIcon/></span>
          <span onClick={()=>dispatch(removeTodo(todo.id))} className='text-slate-50'><DeleteIcon/></span>
          </>
        )}
          </div>
    </div>
  ))
}