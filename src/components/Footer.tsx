import React from "react"
import { Filters } from "./Filters"
import { FilterValue } from "../types"

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    handleFilterChange: (filter: FilterValue) => void
    onClearCompleted: () => void
}

const Footer: React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted
}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>
                    {activeCount} tareas pendientes
                </strong>
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            >

            </Filters>

            {completedCount > 0 && (
                <button className="clear-completed" onClick={onClearCompleted}>
                    Borrar completadas
                </button>
            )}

        </footer>
    )
}

export default Footer