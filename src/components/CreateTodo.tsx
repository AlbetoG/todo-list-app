import React, { useState } from "react";
import { TodoTitle } from "../types";

interface Props {
    saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inpuntValue, setInpuntValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        saveTodo({ title: inpuntValue })
        setInpuntValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                value={inpuntValue}
                onChange={(e) => { setInpuntValue(e.target.value) }}
                placeholder="¿Qué quieres hacer?"
                autoFocus
            />
        </form>
    )
}