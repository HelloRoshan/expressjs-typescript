interface ITodo {
    id: number;
    title: string;
}
import { database } from './database';

const collection = database.todos;
export const add = (todo: ITodo) => {
    return [...collection, todo];
};

export const getAll = (): ITodo[] => {
    return collection;
};

export const getById = (id: number): ITodo[] => {
    return collection.filter(todo => todo.id === id);
};