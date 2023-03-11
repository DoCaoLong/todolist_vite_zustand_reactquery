import { create } from "zustand";

const keyTodo = "TODO";
const local: any = localStorage.getItem(keyTodo);
export const useTodoStore = create((set) => ({
    todos: JSON.parse(local) || [],

    onDelete: (id: number) =>
        set((state: any) => {
            const deleteTodo = (state.todos = state.todos.filter(
                (item: any) => item.id !== id
            ));
            localStorage.setItem(keyTodo, JSON.stringify(state.todos));
            return deleteTodo;
        }),

    onAdd: (value: any) =>
        set((state: any) => {
            const addTodo = (state.todos = [...state.todos, value]);
            localStorage.setItem(keyTodo, JSON.stringify(state.todos));
            return addTodo;
        }),

    onIscomp: (value: any) =>
        set((state: any) => {
            const index = state.todos.findIndex(
                (item: any) => item.id === value.id
            );
            state.todos[index].isComp = true;
            localStorage.setItem(keyTodo, JSON.stringify(state.todos));
            return state.todos;
        }),

    onEdit: (value: any) =>
        set((state: any) => {
            const index = state.todos.findIndex(
                (item: any) => item.id === value.id
            );
            state.todos[index].name = value.name;
            localStorage.setItem(keyTodo, JSON.stringify(state.todos));
            return state.todos;
        }),
}));
