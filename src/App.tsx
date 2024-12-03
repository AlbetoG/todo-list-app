import { useState } from "react"
import Todos from "./components/Todos.tsx"
import { FilterValue, TodoId, TodoTitle, type Todo as TodoType } from "./types"
import Footer from "./components/Footer.tsx"
import { TODO_FILTERS } from "./const.ts"
import { Header } from "./components/Header.tsx"

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    // { id, completed }: { id: TodoId, completed: TodoCompleted }
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        // console.log(todo)
        let todoN = {
          ...todo,
          completed: completed
        }
        // console.log(todoN)
        return todoN
      }

      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      completed: false,
      title,
      id: crypto.randomUUID,
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
