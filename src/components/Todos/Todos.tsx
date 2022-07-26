import React, {FC, useMemo, useState} from 'react';

import styles from './Todos.module.scss';
import TodosList from "../TodosList/TodosList";
import TodoForm from "../TodoForm/TodoForm";
import {observer} from 'mobx-react-lite';
import store from "../../store/todosStore";

const Todos: FC = observer( () => {

    const [filterType, setFilterType] = useState<string>('All');

    const todos = store.todos;

    const handleFilterBtnClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const button = e.target as HTMLElement;
        setFilterType(button.innerText);
    }

    const filteredTodos = useMemo(() => {
        switch (filterType) {
            case 'Active':
                return todos.filter(todo => !todo.completed)
            case 'Completed':
                return todos.filter(todo => todo.completed)
            default:
                return todos
        }
    }, [handleFilterBtnClick]);

    const itemsLeft = filteredTodos.length;

    return (
        <div className={styles.todosContainer}>
            <h1>todos</h1>
            <div className={styles.todoApp}>
                <TodoForm todos={filteredTodos} />
                <TodosList todos={filteredTodos} />
                <footer>
                    <span>{itemsLeft} items left</span>
                    <div>
                        <button
                            className={filterType === 'All' ? styles.focus : ''}
                            onClick={handleFilterBtnClick}>All</button>
                        <button
                            className={filterType === 'Active' ? styles.focus : ''}
                            onClick={handleFilterBtnClick}>Active</button>
                        <button
                            className={filterType === 'Completed' ? styles.focus : ''}
                            onClick={handleFilterBtnClick}>Completed</button>
                    </div>
                    <button onClick={() => store.handleClear()}>Clear completed</button>
                </footer>
            </div>
        </div>
    );
});

export default Todos;