import React, {FC, useMemo, useState} from 'react';
import styles from "../Todos/Todos.module.scss";
import {ITodo} from "../../types/types";
import store from "../../store/todosStore";
import {observer} from 'mobx-react-lite';

interface TodoFormProps {
    todos: ITodo[],
}

const TodoForm: FC <TodoFormProps> = ({todos}) => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            store.addTodo(title);
            setTitle('');
        }
    }

    return (
        <header>
            {todos.length ?
                <i className="material-icons">expand_more</i>
                :
                <i className="material-icons">expand_less</i>
            }
            <input
                type="text"
                placeholder='What needs to be done ?'
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                className={styles.todoApp_input}
            />
        </header>
    );
};

export default observer(TodoForm);