import React, {FC} from 'react';
import {ITodo} from "../../types/types";
import store from "../../store/todosStore";
import {observer} from 'mobx-react-lite';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
    todo: ITodo,
}

const TodoItem: FC <TodoItemProps> = ({todo}) => {

    const classes = [styles.todoItem];

    if (todo.completed) {
        classes.push(styles.completed)
    }

    return (
        <li className={classes.join(' ')} >
            <label className={styles.todoItemContainer}>
                <span className={styles.fakeCheckbox}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        className={styles.checkbox}
                        onChange={() => store.toggleHandler(todo.id)}
                    />
                </span>
                <span>{todo.title}</span>
            </label>

        </li>
    );
};

export default observer(TodoItem);