import React, { useEffect, useState } from "react";
import { useTodoStore } from "../../hooks";
import { shallow } from "zustand/shallow";
import "./style.scss";

export function TodoList() {
    const [todos, onDelete, onAdd, onIscomp, onEdit] = useTodoStore(
        (state: any) => [
            state.todos,
            state.onDelete,
            state.onAdd,
            state.onIscomp,
            state.onEdit,
        ]
    );

    const todoDoing = todos.filter((item: any) => !item.isComp);
    const todoDone = todos.filter((item: any) => item.isComp);

    const initialState: any = {
        id: null,
        name: "",
        isComp: false,
    };

    const [value, setValue] = useState<any>(initialState);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, name: e.target.value });
    };

    const _onEdit = (value: any) => {
        setValue(value);
    };

    const _onAdd = () => {
        const newTask = {
            id: Date.now(),
            name: value.name,
            isComp: false,
        };

        if (value.name.length > 0) {
            if (!value.id) {
                onAdd(newTask);
            } else {
                onEdit(value);
            }
            setValue(initialState);
        }
    };

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            _onAdd();
        }
    };

    return (
        <div className="todo">
            <div className="todo-input">
                <input
                    value={value.name}
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Add task"
                    onKeyUp={onKeyUp}
                />
                <button disabled={!value.name.trim()} onClick={() => _onAdd()}>
                    {value.id ? "Edit" : "Add"}
                </button>
            </div>

            {todos.length > 0 ? (
                <div className="todo-lists">
                    <ul className="todo-list">
                        {todoDoing.map((item: any) => (
                            <li className="todo-item" key={item.id}>
                                <p>{item.name}</p>
                                <div className="todo-btns">
                                    <button onClick={() => onIscomp(item)}>
                                        ok
                                    </button>
                                    <button onClick={() => _onEdit(item)}>
                                        edit
                                    </button>
                                    <button onClick={() => onDelete(item.id)}>
                                        delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="todo-list is-comp">
                        {todoDone.map((item: any) => (
                            <li className="todo-item" key={item.id}>
                                <p>{item.name}</p>
                                <div className="todo-btns">
                                    <button>ok</button>
                                    <button>edit</button>
                                    <button onClick={() => onDelete(item.id)}>
                                        delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="todo-empty">Empty!</p>
            )}
        </div>
    );
}
