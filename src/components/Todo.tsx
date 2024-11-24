import React from "react";
import { TodoId, type Todo as TodoTypes } from "../types";

interface Props extends TodoTypes {
    onRemoveTodo: ({ id }: TodoId) => void
}

const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
    return (
        <div className="view">
            <input className="toggle"
                type="checkbox"
                checked={completed}
                onChange={() => { }}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => { onRemoveTodo({ id }) }}
            />
        </div>
    )
}

export default Todo