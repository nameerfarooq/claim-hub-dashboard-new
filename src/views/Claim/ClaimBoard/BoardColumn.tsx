import React from 'react'
import CardList from './CardList'
import type { Column, Ticket } from './types'

interface BoardColumnProps {
    title: string
    tasks: Ticket[]
    dragHandleProps?: any
}

const BoardColumn: React.FC<BoardColumnProps> = ({
    title,
    tasks,
    dragHandleProps,
}) => {
    return (
        <div className="flex flex-col gap-4">
            <div
                {...dragHandleProps}
                className="text-lg font-semibold text-black"
            >
                {title}
            </div>
            <CardList tasks={tasks} />
        </div>
    )
}

export default BoardColumn
