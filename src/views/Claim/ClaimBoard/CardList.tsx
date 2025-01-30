import React from 'react'
import { Droppable } from '@hello-pangea/dnd'
import BoardCard from './BoardCard'
import type { Ticket } from './types'

interface CardListProps {
    tasks: Ticket[]
}

const CardList: React.FC<CardListProps> = ({ tasks }) => {
    return (
        <Droppable droppableId="card-list" direction="vertical">
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
