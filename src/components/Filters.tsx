import React from "react"
import { type FilterValue } from "../types"
import { FILTERS_BUTTONS } from "../const"

interface Props {
    filterSelected: FilterValue,
    onFilterChange: (filer: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    // const handleClick = ({key}) => { }
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = key === filterSelected
                    const className = isSelected ? 'selected' : ''
                    return (
                        <li key={key}>
                            <a
                                href={href}
                                className={className}
                                onClick={(event) => {
                                    event.preventDefault()
                                    onFilterChange(key as FilterValue)
                                }}>
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}


