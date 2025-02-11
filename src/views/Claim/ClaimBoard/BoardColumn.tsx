import React from 'react'
import CardList from './CardList'
import type { Ticket } from './types'

interface BoardColumnProps {
    columnId: string
    title: string
    tasks: Ticket[]
    dragHandleProps?: any
}

const BoardColumn: React.FC<BoardColumnProps> = ({
    columnId,
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
           
            <CardList columnId={columnId} tasks={tasks} />
        </div>
    )
}

export default BoardColumn;
