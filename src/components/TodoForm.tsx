import { FC, useState } from "react"

import { addTodo } from "../store/todo"

const TodoForm: FC = () => {
  const [content, setContent] = useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addTodo(content) // todo 추가
    setContent("")
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChangeContent} value={content} placeholder="내용" />
      <button type="submit">입력</button>
    </form>
  )
}

export default TodoForm
