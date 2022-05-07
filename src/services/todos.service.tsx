import httpCommon from "http.common"
import { ITodos } from "models/todos.model"



export const getAllTodo = () => {
    return httpCommon.get<ITodos[]>("/todos");
}

export const getTodobyId = (id:string) => {
    return httpCommon.get<ITodos>(`/todo/${id}`);
}

export const createTodo = (todo:ITodos) => {
    return httpCommon.post<ITodos>("/todo/create",todo)
}

export const updateTodo = (id:string,todo:ITodos) => {
    return httpCommon.put<ITodos>(`/todo/${id}`,todo);
}

export const deleteTodo = (id:string) => {
    return httpCommon.delete<ITodos>(`/todo/${id}`);
}