import React from 'react'
import { Droppable } from '@hello-pangea/dnd'
import BoardCard from './BoardCard'
import type { Ticket } from './types'

interface CardListProps {
    tasks: Ticket[]
    columnId: string
}

const CardList: React.FC<CardListProps> = ({ tasks, columnId }) => {
    return (
        <Droppable droppableId={columnId} type="TASK" direction="vertical">
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col gap-3"
                >
                    {tasks.map((task, index) => (
                        <BoardCard key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default CardList
