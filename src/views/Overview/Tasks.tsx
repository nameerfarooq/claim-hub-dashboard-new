import userImg from '@/assets/Images/user.png'
import Avatar from '@/components/ui/Avatar'
import { Button, Tag } from '@/components/ui'
import { BsPlus } from 'react-icons/bs'
// eslint-disable-next-line import/no-duplicates
import { useMemo } from 'react'

import { HiCheckCircle } from 'react-icons/hi'
import DragAndDrop from '@/components/custom/DragAndDrop'
import { MdDragIndicator } from 'react-icons/md'

const Tasks = () => {
    const tasks = [
        {
            id: 1,
            task: 'Upload Initial Site Photos',
            status: 'In Progress',
            priority: 'High',
            dueDate: 'September 19',
            userList: [
                {
                    id: 1,
                    media: { userImg },
                },
                {
                    id: 2,
                    media: { userImg },
                },
                {
                    id: 3,
                    media: { userImg },
                },
                {
                    id: 4,
                    media: { userImg },
                },
            ],
        },
        {
            id: 2,
            task: 'Submit Drying Equipment Logs',
            status: 'Complete',
            priority: 'Medium',
            dueDate: 'July 14',
            userList: [
                {
                    id: 1,
                    media: { userImg },
                },
                {
                    id: 2,
                    media: { userImg },
                },
                {
                    id: 3,
                    media: { userImg },
                },
            ],
        },
        {
            id: 3,
            task: 'Follow Up with Insurance Adjuster',
            status: 'In Progress',
            priority: 'High',
            dueDate: 'September 19',
            userList: [
                {
                    id: 1,
                    media: { userImg },
                },
                {
                    id: 2,
                    media: { userImg },
                },
                {
                    id: 3,
                    media: { userImg },
                },
                {
                    id: 4,
                    media: { userImg },
                },
                {
                    id: 5,
                    media: { userImg },
                },
            ],
        },
        {
            id: 4,
            task: 'Verify Signed Contract with Client',
            status: 'In Progress',
            priority: 'High',
            dueDate: 'September 04',
            userList: [
                {
                    id: 1,
                    media: { userImg },
                },
                {
                    id: 2,
                    media: { userImg },
                },
                {
                    id: 3,
                    media: { userImg },
                },
                {
                    id: 4,
                    media: { userImg },
                },
            ],
        },
        {
            id: 5,
            task: 'Prepare Invoice for Submitted Work',
            status: 'Complete',
            priority: 'Medium',
            dueDate: 'July 24',
            userList: [
                {
                    id: 1,
                    media: { userImg },
                },
                {
                    id: 2,
                    media: { userImg },
                },
            ],
        },
    ]

    const columns = useMemo(
        () => [
            {
                id: 'statusIcon',
                header: '',
                accessorKey: 'status',
                cell: (props) => {
                    const status = props.getValue()
                    return (
                        <div className="flex items-center rounded-full">
                            {status === 'Complete' ? (
                                <HiCheckCircle
                                    size={22}
                                    className="bg-text-white text-primary-mild"
                                />
                            ) : (
                                <HiCheckCircle
                                    size={18}
                                    className="bg-black text-white rounded-full"
                                />
                            )}
                        </div>
                    )
                },
            },
            {
                id: 'task',
                header: '',
                accessorKey: 'task',
                cell: (props) => {
                    const task = props.getValue()
                    const status = props.row.original.status
                    return (
                        <span
                            className={
                                status === 'Complete'
                                    ? 'line-through text-gray-400'
                                    : ''
                            }
                        >
                            {task}
                        </span>
                    )
                },
            },
            {
                id: 'userList',
                header: '',
                accessorKey: 'userList',
                cell: (props) => {
                    const userList = props.getValue()
                    return (
                        <div className="flex items-center gap-2">
                            <Avatar.Group
                                chained
                                maxCount={3}
                                omittedAvatarProps={{
                                    shape: 'circle',
                                    size: 'sm',
                                }}
                            >
                                {userList.map((user) => (
                                    <Avatar
                                        size={'sm'}
                                        key={user.id}
                                        src={user.media.userImg}
                                    />
                                ))}
                            </Avatar.Group>
                        </div>
                    )
                },
            },
            {
                id: 'status',
                header: '',
                accessorKey: 'status',
                cell: (props) => {
                    const status = props.getValue()
                    return (
                        <div className="flex items-center gap-2">
                            <Tag
                                className={
                                    status === 'Complete'
                                        ? 'bg-green-200'
                                        : 'bg-red-200'
                                }
                            >
                                {status}
                            </Tag>
                        </div>
                    )
                },
            },
            {
                id: 'priority',
                header: '',
                accessorKey: 'priority',
                cell: (props) => {
                    const priority = props.getValue()
                    return (
                        <Tag
                            className={
                                priority === 'High'
                                    ? 'bg-red-200'
                                    : 'bg-yellow-200'
                            }
                        >
                            {priority}
                        </Tag>
                    )
                },
            },
            {
                id: 'dueDate',
                header: '',
                accessorKey: 'dueDate',
            },
        ],
        [],
    )

    return (
        <main className="flex flex-col gap-[30px]">
            <div className="flex flex-row items-center justify-between pt-[30px]">
                <p className="text-2xl font-bold">Tasks</p>
                <div className="flex flex-row gap-2">
                    <Avatar.Group
                        chained
                        maxCount={4}
                        omittedAvatarProps={{ shape: 'circle' }}
                        omittedAvatarTooltip
                    >
                        <Avatar src={userImg} />
                        <Avatar src={userImg} />
                        <Avatar src={userImg} />
                        <Avatar src={userImg} />
                        <Avatar src={userImg} />
                        <Avatar src={userImg} />
                        <Avatar src={userImg} />
                    </Avatar.Group>
                    <Button variant="default" icon={<BsPlus size={22} />}>
                        Add members
                    </Button>
                </div>
            </div>
            <div>
                <p className="text-xl font-bold flex flex-row items-center">
                    <span>
                        <MdDragIndicator />
                    </span>{' '}
                    Claim&apos;s Tasks
                </p>
                <DragAndDrop data={tasks} columns={columns} />
                <button className="p-2 border-dashed border-2 rounded-xl bg-[#f5f5f5] font-bold w-full flex items-center justify-center text-center">
                    <BsPlus size={22} />
                    Add task
                </button>
            </div>
        </main>
    )
}

export default Tasks
