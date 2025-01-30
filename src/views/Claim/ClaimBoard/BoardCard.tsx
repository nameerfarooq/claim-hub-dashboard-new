import React from 'react'
import { Draggable } from '@hello-pangea/dnd'
import type { Ticket } from './types'
import { Avatar, Tag } from '@/components/ui'
import AvatarGroup from '@/components/ui/Avatar/AvatarGroup'
import { IoAttach } from 'react-icons/io5'
import { FaRegComment } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

interface BoardCardProps {
    task: Ticket
    index: number
}

const BoardCard: React.FC<BoardCardProps> = ({ task, index }) => {
    // Function to select random tag background colors
    const tagBgColors = () => {
        const colors = ['A7F3D0', 'BAE6FD', 'E9D5FF']
        const randomIndex = Math.floor(Math.random() * colors.length)
        return `#${colors[randomIndex]}`
    }
    const nav = useNavigate()
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary-deep"
                    onClick={() => nav('/overview')}
                >
                    <div className="text-lg font-bold text-black">
                        {task.name}
                    </div>
                    {/* <div className="text-xs text-gray-500">
                        {task.description}
                    </div> */}

                    {/* Labels */}
                    {task.labels && task.labels.length > 0 && (
                        <div className="mt-2 flex items-center gap-2">
                            {task.labels.map((label) => (
                                <Tag
                                    key={label}
                                    style={{ backgroundColor: tagBgColors() }}
                                >
                                    {label}
                                </Tag>
                            ))}
                        </div>
                    )}

                    {/* Due Date */}
                    {/* {task.dueDate && (
                        <div className="mt-2 text-xs text-gray-500">
                            Due: {task.dueDate}
                        </div>
                    )} */}

                    {/* Members and Attachments */}
                    {task.members && task.members.length > 0 && (
                        <div className="mt-3 flex items-center justify-between">
                            <div className="">
                                <AvatarGroup chained maxCount={3}>
                                    {task.members.map((member) => (
                                        <Avatar size={22} src={member.img} />
                                    ))}
                                </AvatarGroup>
                            </div>
                            <div className="flex flex-row gap-2">
                                <button className="flex flex-row gap-1 text-sm font-semibold text-black">
                                    <IoAttach size={18} />
                                    {task.attachments &&
                                        task.attachments.length > 0 && (
                                            <span className="text-black">
                                                {task.attachments.length}
                                            </span>
                                        )}
                                </button>
                                <button className="flex flex-row gap-1 text-sm font-semibold">
                                    <FaRegComment size={18} />
                                    {task.comments &&
                                        task.comments.length > 0 && (
                                            <span className="text-black">
                                                {task.comments.length}
                                            </span>
                                        )}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Attachments */}
                    {/* {task.attachments && task.attachments.length > 0 && (
                        <div className="mt-2">
                            <span className="text-xs text-gray-500">
                                Attachments:
                            </span>
                            <ul className="text-xs text-gray-700">
                                {task.attachments.map((attachment) => (
                                    <li key={attachment.id}>
                                        {attachment.name} ({attachment.size})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )} */}

                    {/* Comments */}
                    {/* {task.comments && task.comments.length > 0 && (
                        <div className="mt-2">
                            <span className="text-xs text-gray-500">
                                Comments:
                            </span>
                            <ul className="text-xs text-gray-700">
                                {task.comments.map((comment) => (
                                    <li key={comment.id}>
                                        <strong>{comment.name}</strong>:{' '}
                                        {comment.message}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )} */}
                </div>
            )}
        </Draggable>
    )
}

export default BoardCard
