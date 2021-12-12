import React from "react";

function Todo(props){
    function deleteHandler(){
    props.setTodos(props.todos.filter(todo=>todo.id!==props.todo.id));
    };
    function completeHandler(){
        props.setTodos(
            props.todos.map((item) =>{
                if(item.id===props.todo.id){
                    return {...item,completed: !item.completed,};
                };
                return item;
            })
        );
    };

     return(
     <div className="todo">
         <li className={`todoitem ${props.todo.completed ? "checkedparent" : ''}`}>{props.text}</li>
         <button onClick={completeHandler} className={`todocheck ${props.todo.completed ? "checkedtodo" : ''}`} >
             <i className="fas fa-check"></i>
             </button>
         <button onClick={deleteHandler} className="tododel">
             <i className="fas fa-trash"></i>
             </button>
     </div>

    );
}

export default Todo;