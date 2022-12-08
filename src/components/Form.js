import React, { useState } from 'react';

const Form = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // prevent empty submissions
        if (name !== '') {
            props.addTask(name);
            setName('');
        }
        // if (e.target.value !== '') {
        //     props.addTask(name)
        // } else {
        //     alert("Please add a task ;-)")
        // }
        // setName('');
    }

    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

export default Form;
