import React, { useState } from 'react';

const Todo = (props) => {

    // console.log(props);
    // console.log(props.tasks);

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    const handleChange = (e) => {
        setNewName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newName.trim()) {
            return;
        }
        props.editTask(props.id, newName);
        setNewName('');
        setEditing(false);
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor={props.id} className="todo-label">
                    New name for {props.name}
                </label>
                <input
                    type="text"
                    className="todo-text"
                    placeholder='Edit task'
                    id={props.name}
                    value={newName}
                    onChange={handleChange} />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
                    Cancel
                    <span className="visually-hidden">Renaming {props.name}</span>
                </button>
                <button type="button" className="btn btn__primary todo-edit" >
                    Save
                    <span className="visually-hidden"> New name for {props.name}</span>
                </button>
            </div>
        </form>
    )

    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)} />
                <label htmlFor={props.id} className="todo-label">
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setEditing(true)}>
                    Edit
                    <span className="visually-hidden">
                        {props.name}
                    </span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );

    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>

    // return (
    //     <li className="todo stack-small">
    //         <div className="c-cb">
    //             <input
    //                 id={props.id}
    //                 type="checkbox"
    //                 defaultChecked={props.completed}
    //                 onChange={() => props.toggleTaskCompleted(props.id)}
    //             />
    //             <label className="todo-label" htmlFor={props.id}>
    //                 {props.name}
    //             </label>
    //         </div>
    //         <div className="btn-group">
    //             <button
    //                 type="button"
    //                 className="btn"
    //                 onClick={() => props.editTask(props.id)}>
    //                 Edit <span className="visually-hidden">{props.name}</span>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="btn btn__danger"
    //                 onClick={() => props.deleteTask(props.id)}
    //             >
    //                 Delete <span className="visually-hidden">{props.name}</span>
    //             </button>
    //         </div>
    //     </li>
    // );
};

export default Todo;
