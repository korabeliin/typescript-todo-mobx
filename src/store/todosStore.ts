import { makeAutoObservable } from "mobx";
import { makePersistable } from 'mobx-persist-store';
import {ITodo} from "../types/types";

class TodosStore {
    todos: ITodo[] = [];

    constructor() {
        makeAutoObservable(this)
        makePersistable(this, {name: 'TodosStore', properties: ['todos'], storage: window.localStorage})
    }

    addTodo(title: string) {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        }
        this.todos.unshift(newTodo);
    }

    toggleHandler(id: number) {
        this.todos = this.todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
    }

    handleClear() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}

const store = new TodosStore();
export default store;