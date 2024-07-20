import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submit, delet, edit } from '../features/formSlice';
import TodoUpdate from './TodoUpdate';

const TodoForm = () => {
    const [value, setValue] = useState("");
    const { name, todo } = useSelector((state) => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            dispatch(submit({ value }));
            setValue("");
        }
    };

    const handleDelete = (id) => {
        dispatch(delet({ id }));
    };

    const handleEdit = (id) => {
        dispatch(edit({ id }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Enter the task"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

            <ul>
                {todo.map((item, index) => (
                    <li key={index} style={{ margin: "20px",listStyleType:"none" }}>
                        {item.isEditing ? (
                            <TodoUpdate id={item.id} value={item.task} />
                        ) : (
                            <>
                                {item.task}
                                <button onClick={() => handleEdit(item.id)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoForm;
