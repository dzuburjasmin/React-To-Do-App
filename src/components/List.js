import React from 'react';
import Todo from './Todo';


const List = (props) =>{
   
    return(
<div className="todocontainer">
    <ul className="todolistul">
        {props.filteredTodos.map((todo)=>(
            <Todo key={todo.id} todo={todo}  text={todo.text} setTodos={props.setTodos} todos={props.todos}/>
        ))
            }
    </ul>
</div>
    )

};

export default List;