import React from 'react';

const Form = (props) => {
    const inputTextHandler= (e)=>{

        props.setInputText(e.target.value);
    };
    const submitTodoHandler = (e)=>{
        e.preventDefault();
        props.setTodos([...props.todos, {text: props.inputText, completed:false, id: Math.random()*1000}
        ]);
        props.setInputText("");
    }
    function statusHandler(e){
        props.setStatus(e.target.value);
    }
    
    return (
<form>
    <input value={props.inputText}type="text" onChange= {inputTextHandler} className="todotext" placeholder="Start typing..."/>
    <button className="todobtn" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus"></i>
    </button>
    <div className="select">
        <select onChange={statusHandler} name="todos" className="filter">
            <option value="all">All</option>
            <option value="checked">Checked</option>
            <option value="unchecked">Unchecked</option>
        </select>
    </div>

</form>
    );
};

export default Form;