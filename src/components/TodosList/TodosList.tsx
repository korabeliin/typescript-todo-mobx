import React, {FC} from 'react';
import TodoItem from "../TodoItem/TodoItem";
import {ITodo} from "../../types/types";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {observer} from 'mobx-react-lite';

interface TodosListProps {
    todos: ITodo[],
}

const TodosList:FC <TodosListProps> = observer( ({todos}) => {
    return (
        <ul>
            <TransitionGroup>
                {todos.map(todo =>
                    <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames="todo"
                    >
                        <TodoItem todo={todo} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </ul>
    );
});

export default TodosList;