import { useState } from "react"
import Todos from "./components/Todos.tsx"
import { TodoId } from "./types"

const mockTodos = [
  {
    completed: false,
    id: 'c19f8c9b-ae32-4c8a-9bed-d141b09f5477',
    title: 'Sacar al miduperro a pasear'
  },
  {
    completed: true,
    id: 'efad0afc-7d2e-4020-8ef4-14fd0b832de8',
    title: 'Ir a por el pan'
  },
  {
    completed: false,
    id: '6a3d0d0f-d2d6-4d2a-9b08-5a5d8a5e0c1d',
    title: 'Participar en la Hackathon de Cloudinary'
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  )
}

export default App
