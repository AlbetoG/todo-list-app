export const TODO_FILTERS = {
    ALL:'all',
    ACTIVE:'active',
    COMPLETED:'completed',
} as const // -> propiedad de lectura


export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literal: 'Todos',
        href: `/?filters=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Activos',
        href: `/?filters=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        literal: 'Completos',
        href: `/?filters=${TODO_FILTERS.COMPLETED}`
    }
} as const // -> propiedad de lectura
