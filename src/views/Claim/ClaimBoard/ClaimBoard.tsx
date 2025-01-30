import { useState } from 'react'
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from '@hello-pangea/dnd'
import BoardColumn from './BoardColumn'
import type { Columns } from './types'
import user from '@/assets/Images/user.png'

// Dummy data for columns and tickets
const initialColumns: Columns = [
    {
        id: 'todo',
        title: 'To Do',
        tasks: [
            {
                id: 'ticket-1',
                name: 'Plan Project Scope',
                description: 'Define project milestones',
                cover: '',
                dueDate: '2023-11-20',
                labels: ['Planning'],
                members: [
                    {
                        id: 'member-1',
                        name: 'AbdulHannan',
                        email: 'abdul@example.com',
                        img: user,
                    },
                ],
                attachments: [
                    {
                        id: 'attachment-1',
                        name: 'scope.pdf',
                        src: '/attachments/scope.pdf',
                        size: '1.2MB',
                    },
                ],
                comments: [
                    {
                        id: 'comment-1',
                        name: 'John Doe',
                        src: user,
                        message: 'Let’s finalize the scope by Friday.',
                        date: 1698765432,
                    },
                ],
            },
            {
                id: 'ticket-2',
                name: 'Design Wireframes',
                description: 'Create wireframes for the main pages',
                cover: '/img/covers/wireframe.jpg',
                dueDate: '2023-11-25',
                labels: ['Design'],
                members: [
                    {
                        id: 'member-2',
                        name: 'Sara Ali',
                        email: 'sara@example.com',
                        img: user,
                    },
                ],
                attachments: [],
                comments: [],
            },
            {
                id: 'ticket-3',
                name: 'Setup Repository',
                description: 'Initialize Git repository and add readme',
                cover: '',
                dueDate: '2023-11-18',
                labels: ['Development'],
                members: [],
                attachments: [],
                comments: [],
            },
        ],
    },
    {
        id: 'in-progress',
        title: 'In Progress',
        tasks: [
            {
                id: 'ticket-4',
                name: 'Develop Authentication',
                description: 'Implement user authentication',
                cover: '',
                dueDate: '2023-12-01',
                labels: ['Development'],
                members: [
                    {
                        id: 'member-3',
                        name: 'Ali Khan',
                        email: 'ali@example.com',
                        img: user,
                    },
                ],
                attachments: [],
                comments: [],
            },
            {
                id: 'ticket-5',
                name: 'Set Up Database',
                description: 'Configure PostgreSQL database',
                cover: '',
                dueDate: '2023-11-22',
                labels: ['Database'],
                members: [],
                attachments: [],
                comments: [],
            },
        ],
    },
    {
        id: 'review',
        title: 'Review',
        tasks: [
            {
                id: 'ticket-6',
                name: 'Code Review',
                description: 'Review pull requests from team',
                cover: '',
                dueDate: '2023-11-24',
                labels: ['Development', 'Review'],
                members: [],
                attachments: [],
                comments: [],
            },
        ],
    },
    {
        id: 'testing',
        title: 'Testing',
        tasks: [
            {
                id: 'ticket-7',
                name: 'Unit Testing',
                description: 'Write unit tests for critical features',
                cover: '',
                dueDate: '2023-11-30',
                labels: ['Testing'],
                members: [
                    {
                        id: 'member-4',
                        name: 'Zara Ahmed',
                        email: 'zara@example.com',
                        img: user,
                    },
                ],
                attachments: [],
                comments: [],
            },
            {
                id: 'ticket-8',
                name: 'Integration Testing',
                description: 'Perform integration tests for APIs',
                cover: '',
                dueDate: '2023-12-02',
                labels: ['Testing'],
                members: [],
                attachments: [],
                comments: [],
            },
        ],
    },
    {
        id: 'done',
        title: 'Done',
        tasks: [
            {
                id: 'ticket-9',
                name: 'Finalize Project Plan',
                description: 'Get approval on the project plan',
                cover: '',
                dueDate: '2023-11-15',
                labels: ['Planning'],
                members: [
                    {
                        id: 'member-5',
                        name: 'Ahmad Raza',
                        email: 'ahmad@example.com',
                        img: user,
                    },
                ],
                attachments: [],
                comments: [
                    {
                        id: 'comment-2',
                        name: 'Jane Doe',
                        src: user,
                        message: 'Project plan approved. Great work!',
                        date: 1698767890,
                    },
                ],
            },
        ],
    },
]

const ClaimBoard = () => {
    const [columns, setColumns] = useState<Columns>(initialColumns)

    const onDragEnd = (result: DropResult) => {
        // Your existing onDragEnd logic...
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="board" direction="horizontal" type="COLUMN">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex gap-4 p-4 overflow-x-auto"
                    >
                        {columns.map((column, index) => (
                            <Draggable
                                key={column.id}
                                draggableId={column.id}
                                index={index}
                            >
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        className="min-w-[300px] bg-blue-50/50 p-4 rounded-lg"
                                    >
                                        <BoardColumn
                                            title={column.title}
                                            tasks={column.tasks}
                                            dragHandleProps={
                                                provided.dragHandleProps
                                            }
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default ClaimBoard
