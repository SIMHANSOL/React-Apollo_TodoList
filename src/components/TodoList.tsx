import { FC } from "react"
import { useReactiveVar, useQuery } from "@apollo/client"

import todoVar from "../store/todo"
import TodoItem from "./TodoItem"
import { GET_TODOS } from "../queries/todo"

const TodoList: FC = () => {
  //   const { data } = useQuery(GET_TODOS);
  const todos = useReactiveVar(todoVar)

  return (
    <section>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={`todo_${todo.id}`} />
      ))}
    </section>
  )
}

export default TodoList
