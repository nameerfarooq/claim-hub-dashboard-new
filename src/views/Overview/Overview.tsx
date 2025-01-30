import {
    Avatar,
    Button,
    Card,
    Select,
    Tag,
    Calendar,
    Timeline,
    Steps,
    Tabs,
    Dropdown,
    Tooltip,
} from '@/components/ui'
import React, { useState } from 'react'
import { IoMdAdd, IoMdMenu } from 'react-icons/io'
import user from '@/assets/Images/user.png'
import { LuMessageSquareText, LuPhone, LuSquareCheckBig } from 'react-icons/lu'
import { CiMail, CiUser } from 'react-icons/ci'
import { HiOutlineDocumentSearch, HiOutlineUser } from 'react-icons/hi'
import { BsCameraVideoFill } from 'react-icons/bs'
import {
    TbCalendarStar,
    TbCheck,
    TbCircle,
    TbClock,
    TbCoffee,
    TbFileDescription,
    TbMessage,
    TbPencil,
    TbTag,
    TbUser,
} from 'react-icons/tb'
import TabList from '@/components/ui/Tabs/TabList'
import TabNav from '@/components/ui/Tabs/TabNav'
import TabContent from '@/components/ui/Tabs/TabContent'
import { BiListCheck } from 'react-icons/bi'
import { CgSpinner } from 'react-icons/cg'
import { MdOutlineTask } from 'react-icons/md'
import { GoImage } from 'react-icons/go'
import PillIcon from '@/assets/icons/PillIcon'
import { IoPersonCircleSharp } from 'react-icons/io5'

const Overview = () => {
    const tasks = [
        {
            id: 1,
            title: 'Review contract for missing signatures',
            priority: 'High',
            date: 'August 04',
            icon: <TbCheck />,
            completed: false,
        },
        {
            id: 2,
            title: 'Upload additional site photos',
            priority: 'Medium',
            date: 'July 14',
            icon: <TbCheck />,
            completed: true,
        },
        {
            id: 3,
            title: 'Follow up with insurance adjuster',
            priority: 'High',
            date: 'September 19',
            icon: <TbCheck />,
            completed: false,
        },
        {
            id: 4,
            title: 'Submit technician drylogs for approval',
            priority: 'High',
            date: 'September 04',
            icon: <TbCheck />,
            completed: false,
        },
        {
            id: 5,
            title: 'Verify uploaded invoices for accuracy',
            priority: 'Medium',
            date: 'July 24',
            icon: <TbCheck />,
            completed: true,
        },
    ]

    const events = [
        {
            id: 1,
            title: 'Initial Inspection',
            type: 'Meeting',
            time: '10:00 AM',
            icon: <BsCameraVideoFill />,
            iconColor: 'bg-gray-200',
        },
        {
            id: 2,
            title: 'Insurance Adjuster Call',
            type: 'Followup',
            time: '12:00 PM',
            icon: <TbCalendarStar />,
            iconColor: 'bg-gray-200',
        },
        {
            id: 3,
            title: 'Townhall',
            type: 'Event',
            time: '03:00 PM',
            icon: <TbCoffee />,
            iconColor: 'bg-gray-200',
        },
        {
            id: 4,
            title: 'Write daily report',
            type: 'Task',
            time: '05:00 PM',
            icon: <LuSquareCheckBig />,
            iconColor: 'bg-gray-200',
        },
        {
            id: 5,
            title: 'Townhall',
            type: 'Event',
            time: '03:00 PM',
            icon: <TbCalendarStar />,
            iconColor: 'bg-gray-200',
        },
        {
            id: 6,
            title: 'Write daily report',
            type: 'Task',
            time: '05:00 PM',
            icon: <LuSquareCheckBig />,
            iconColor: 'bg-gray-200',
        },
    ]

    const activities = [
        {
            id: 1,
            date: 'SUNDAY, 06 MARCH',
            activity: [
                {
                    id: 1,
                    title: 'Photos uploaded by Technician Mike',
                    details: 'Recipient: Steve Sutton',
                    time: '03:13 AM',
                    avatar: false,
                },
                {
                    id: 2,
                    title: 'Contract signed by the client',
                    time: '10:32 PM',
                    avatar: true,
                },
                {
                    id: 3,
                    title: 'Claim approved by insurance adjuster',
                    time: '08:15 PM',
                    avatar: true,
                },
            ],
        },
        {
            id: 2,
            date: 'FRIDAY, 04 MARCH',
            activity: [
                {
                    id: 1,
                    title: 'Payment invoice generated',
                    time: '01:43 AM',
                    avatar: true,
                },
                {
                    id: 2,
                    title: 'Drying equipment deployed at site',
                    time: '10:32 PM',
                    avatar: true,
                },
            ],
        },
    ]

    const stepsData = [
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <TbCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Lead',
            completed: true,
            description: '3 Days',
            icon: <CiUser size={24} className="text-white" />,
        },
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <TbCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Scheduling',
            completed: true,
            description: '26 Days',
            icon: <TbClock size={24} className="text-white" />,
        },
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <TbCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Assessment',
            completed: false,
            description: '8 Months',
            icon: <BiListCheck size={24} />, // Use IN_PROGRESS instead of 'in_progress'
        },
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <TbCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Determination',
            completed: false,
            description: '9-20-2023',
            icon: <HiOutlineDocumentSearch size={24} />, // Use PENDING instead of 'pending'
        },
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <TbCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Litigation',
            completed: false,
            description: '9-23-2023',
            icon: <CgSpinner size={24} />,
        },
        {
            timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <TbCheck />,
                    value: 'Qualification',
                },
            ],
            title: 'Settlement',
            completed: false,
            description: '10-19-2023',
            icon: <MdOutlineTask size={24} />,
        },
    ]

    const commentContent = [
        {
            icon: user,
            name: 'Arlene Pierce',
            date: '20 May 2024',
            message:
                'Helvetica 8-bit photo booth tumblr food truck. Enamel pin wolf tousled sartorial, brunch shoreditch skateboard beard helvetica. Plaid typewriter gastropub bespoke.',
        },
        {
            icon: user,
            name: 'Arlene Pierce',
            date: '20 May 2024',
            message:
                'Helvetica 8-bit photo booth tumblr food truck. Enamel pin wolf tousled sartorial, brunch shoreditch skateboard beard helvetica. Plaid typewriter gastropub bespoke.',
        },
    ]

    const [currentTab, setCurrentTab] = useState('comments')

    const Toggle = (
        <button className="text-lg font-bold px-2 py-3 bg-primary-subtle text-black rounded-lg flex flex-row items-center gap-1">
            <span>
                <IoMdMenu />
            </span>{' '}
            Claim Menu
        </button>
    )

    return (
        <main className="flex flex-col gap-[40px]">
            <section className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-[10px]">
                    <Tag className="bg-red-300 w-fit">Dryout and Tarp</Tag>
                    <p className="text-2xl font-bold">Samuel Andrew Hall</p>
                </div>
                <Dropdown renderTitle={Toggle}>
                    <Dropdown.Item>Measurements</Dropdown.Item>
                    <Dropdown.Item>Labor Tickets</Dropdown.Item>
                    <Dropdown.Item>Permits</Dropdown.Item>
                    <Dropdown.Item>Progress</Dropdown.Item>
                    <Dropdown.Item>Payment</Dropdown.Item>
                    <Dropdown.Item>Payment Processing</Dropdown.Item>
                    <Dropdown.Item>Commissions</Dropdown.Item>
                    <Dropdown.Item>Mortgage Checks</Dropdown.Item>
                    <Dropdown.Item>History</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                </Dropdown>
            </section>
            <section className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1">
                        {' '}
                        <span>
                            <TbTag />
                        </span>{' '}
                        Label
                    </p>
                    <div className="gap-1 flex flex-row">
                        <Tag className="bg-red-300 w-fit">Water</Tag>
                        <Tag className="bg-primary-subtle w-fit">Hurricane</Tag>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1">
                        {' '}
                        <span>
                            <TbCircle />
                        </span>{' '}
                        Stage
                    </p>
                    <div className="gap-1 flex flex-row">
                        <Tag className="bg-success-subtle w-fit">
                            Scheduling
                        </Tag>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1">
                        {' '}
                        <span>
                            <TbUser />
                        </span>{' '}
                        Assigned to
                    </p>
                    <div className="gap-1 flex flex-row">
                        <Avatar src={user} size={'sm'} />
                        <Avatar src={user} size={'sm'} />
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1">
                        {' '}
                        <span>
                            <TbClock />
                        </span>{' '}
                        Due date
                    </p>
                    <div className="gap-1 flex flex-row">
                        <p className="w-fit font-semibold">March 24</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-[10px]">
                <p className="text-xl font-bold">Milestones</p>
                <div className="w-full py-[10px]">
                    <Steps current={2}>
                        {stepsData.map((step, index) => (
                            <Steps.Item
                                key={index}
                                title={step.title}
                                customIcon={step.icon}
                            />
                        ))}
                    </Steps>
                    {/* <div className="w-full border p-2 flex flex-row justify-between">
                        {stepsData.map((step, index) => (
                            <Tooltip key={index}>
                                <div
                                    className={`h-10 w-10 rounded-full flex items-center justify-center ${step.completed ? 'bg-primary text-white' : 'bg-primary-subtle text-black'} `}
                                >
                                    {step.icon}
                                </div>
                            </Tooltip>
                        ))}
                    </div> */}
                </div>
                <div className="w-full mx-auto flex flex-row items-center justify-center mt-2">
                    <button className="py-2 px-3 rounded-lg text-lg font-bold bg-primary-mild text-white">
                        Submit by “Schedule”
                    </button>
                </div>
            </section>
            <section className="flex flex-col gap-[10px]">
                <p className="text-xl font-bold">Overview</p>
                <div className="grid grid-cols-5 gap-2">
                    <Card className="bg-white border border-dashed border-primary-mild">
                        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
                            <Avatar
                                icon={<TbMessage />}
                                className="bg-success-light"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-bold">Messages</p>
                                <p className="text-3xl font-bold">387</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-white border border-dashed border-primary-mild">
                        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
                            <Avatar
                                icon={<TbFileDescription />}
                                className="bg-grape"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-bold">Documents</p>
                                <p className="text-3xl font-bold">3</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-white border border-dashed border-primary-mild">
                        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
                            <Avatar
                                icon={<GoImage />}
                                className="bg-primary-light"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-bold">Photos</p>
                                <p className="text-3xl font-bold">564</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-white border border-dashed border-primary-mild">
                        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
                            <Avatar
                                icon={<LuMessageSquareText />}
                                className="bg-success-light"
                            />
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-bold">Invoice</p>
                                <p className="text-3xl font-bold">2</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-white border border-dashed border-primary-mild">
                        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
                            <Avatar icon={<PillIcon />} className="bg-grape" />
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-bold">On-Site visit</p>
                                <p className="text-3xl font-bold">7</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
            <section className="grid grid-cols-2 xl:grid-cols-4 gap-2">
                <Card className="bg-white border border-primary-mild">
                    <div className="flex flex-row items-center justify-between">
                        <p className="font-bold text-xl">Client</p>
                        <button className="p-1 rounded-full bg-gray-200">
                            <TbPencil />
                        </button>
                    </div>
                    <div className="flex flex-row items-center gap-[10px] py-[20px]">
                        <Avatar src={user} size={'sm'} />
                        <div className="flex flex-col">
                            <p className="font-bold">Samuel Andrew Hall</p>
                            <p className="flex flex-col items-start">
                                First contact:
                                <span className="font-semibold">
                                    4th May
                                </span>{' '}
                            </p>
                        </div>
                    </div>
                    <div className="border-y border-gray-200 py-[20px] flex flex-col gap-[15px]">
                        <p className="flex flex-row items-center gap-[10px]">
                            <span>
                                <CiMail />
                            </span>{' '}
                            handsome-obrien@hotmail.com
                        </p>
                        <p className="flex flex-row items-center gap-[10px]">
                            <span>
                                <LuPhone />
                            </span>{' '}
                            +1 (541) 754-3010
                        </p>
                    </div>
                    <div className="py-[20px] flex flex-col gap-[15px]">
                        <p className="font-bold text-[16px]">Job Address</p>
                        <div className="gap-[5px] flex flex-col">
                            <p>1527 Pond Reef Rd</p>
                            <p>Ketchikan</p>
                            <p>Alaska 99901</p>
                            <p>United States of America</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg-white border border-primary-mild relative">
                    <div className="flex flex-row items-center justify-between">
                        <p className="font-bold text-xl">Claim</p>
                        <button className="p-1 rounded-full bg-gray-200">
                            <TbPencil />
                        </button>
                    </div>
                    <div className="py-[20px] border-b border-gray-200">
                        <Select
                            options={[
                                { value: 'C-103', label: 'C-103' },
                                { value: 'C-302', label: 'C-302' },
                            ]}
                            isSearchable={false}
                            isMulti
                            size="sm"
                        />
                    </div>
                    <div className="flex flex-col gap-[15px] py-[20px]">
                        <div className="flex flex-col">
                            <p>Category</p>
                            <p className="font-semibold">Residential</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Work Type</p>
                            <p className="font-semibold">Inspection</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Trade</p>
                            <p className="font-semibold">Asphalt Roofing</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Initial Appt</p>
                            <p className="font-semibold">
                                11 Aug 2024 09:40 PM
                            </p>
                        </div>
                    </div>
                    <p className="absolute bottom-[20px] right-5 text-primary-mild cursor-pointer border-b border-primary-mild">
                        See All (8 Total)
                    </p>
                </Card>
                <Card className="bg-white border border-primary-mild">
                    <div className="flex flex-row items-center justify-between">
                        <p className="font-bold text-xl">Insurance</p>
                        <button className="p-1 rounded-full bg-gray-200">
                            <TbPencil />
                        </button>
                    </div>
                    <div className="flex flex-col gap-[15px] py-[20px]">
                        <div className="flex flex-col">
                            <p>Insurance Company</p>
                            <p className="font-semibold">State Farm</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Damage Location</p>
                            <p className="font-semibold">
                                123 Maple Street, Miami, FL
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p>Date of Loss</p>
                            <p className="font-semibold">November 15, 2024</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Claim Field</p>
                            <p className="font-semibold">Yes</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Claim Number</p>
                            <p className="font-semibold">784526431</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Have Paperwork</p>
                            <p className="font-semibold">Yes</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg-white border border-primary-mild">
                    <div className="flex flex-row items-center justify-between">
                        <p className="font-bold text-xl">Adjuster</p>
                        <button className="p-1 rounded-full bg-gray-200">
                            <TbPencil />
                        </button>
                    </div>
                    <div className="flex flex-col gap-[15px] py-[20px]">
                        <div className="flex flex-col">
                            <p>Adjuster Name</p>
                            <p className="font-semibold">Cindy Hernandez</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Adjuster Phone</p>
                            <p className="font-semibold">(407) 871- 4426</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Adjuster Fax</p>
                            <p className="font-semibold">-</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Claim Field</p>
                            <p className="font-semibold">Yes</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Adjuster Email</p>
                            <p className="font-semibold truncate">
                                CINDY.HERNANDEZ@LIB.COM
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p>Met With Adjuster</p>
                            <p className="font-semibold">No</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Claim Approved</p>
                            <p className="font-semibold">No</p>
                        </div>
                    </div>
                </Card>
            </section>
            <section className="grid grid-cols-2 xl:grid-cols-3 gap-1">
                <Card className="bg-white border border-primary-mild">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-xl font-bold text-wrap">
                            Current tasks
                        </p>
                        <div className="flex flex-row gap-1">
                            <button className="px-3 p-2 bg-primary-mild text-white flex flex-row items-center rounded-xl font-bold">
                                <IoMdAdd />
                                Add
                            </button>
                            <Button variant="default"> All tasks</Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] h-[350px] overflow-auto custom-scrollbar pr-2 pt-[20px]">
                        {tasks.map((task) => (
                            <div key={task.id} className="pb-2 border-b">
                                <Card
                                    bordered={true}
                                    className="border-white"
                                    bodyClass="p-0"
                                >
                                    <div className="flex flex-row justify-between items-center gap-[10px]">
                                        <div className="w-fit">
                                            <Button
                                                className={`rounded-full size-[24px] p-1 ${task.completed ? 'bg-[#42FFC0] text-white border-white ' : 'bg-white text-black border-black '}`}
                                                icon={task.icon}
                                            ></Button>
                                        </div>
                                        <div className="w-full h-full flex flex-row justify-between items-center">
                                            <div className="flex flex-col">
                                                <p
                                                    className={`font-bold text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}
                                                >
                                                    {task.title}
                                                </p>
                                                <p className="text-sm flex flex-row items-center">
                                                    <span className="mr-[2px]">
                                                        <HiOutlineUser
                                                            size={12}
                                                        />{' '}
                                                    </span>
                                                    {task.date}
                                                </p>
                                            </div>
                                            <Tag
                                                className={`${task.priority === 'Low' ? 'bg-success-light' : task.priority === 'Medium' ? 'bg-[#42FFC0]' : 'bg-red-300'}`}
                                            >
                                                {task.priority}
                                            </Tag>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Card>
                <div className="bg-white border border-primary-mild rounded-2xl py-4">
                    <div className="h-[350px] overflow-y-auto custom-scrollbar">
                        <div className="w-fit mx-auto">
                            <Calendar className="p-4" />
                        </div>
                        <div className="mt-5 flex flex-col gap-[20px] px-4">
                            <p className="text-lg font-bold">Schedule Today</p>
                            <div>
                                {events.map((event) => (
                                    <div key={event.id} className="mb-4">
                                        <Card
                                            bordered={true}
                                            className="border-white"
                                            bodyClass="p-0"
                                        >
                                            <div className="flex flex-row justify-start w-full items-center gap-1">
                                                <div className="w-fit">
                                                    <Avatar
                                                        className={`${event.iconColor} rounded-lg`}
                                                        icon={event.icon}
                                                        shape="square"
                                                    />
                                                </div>
                                                <div className="w-full h-full flex flex-row gap-2 justify-start items-center">
                                                    <div className="flex flex-col">
                                                        <p className="font-bold text-sm">
                                                            {event.title}
                                                        </p>
                                                        <p className="text-sm">
                                                            {event.type}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm font-semibold ml-auto">
                                                        {event.time}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <Button className="w-full" variant="default">
                            Add Event
                        </Button>
                    </div>
                </div>
                <Card className="bg-white border border-primary-mild">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-xl font-bold">Activities</p>
                        <Button>All Activities</Button>
                    </div>
                    <div className="pt-[20px] h-[350px] overflow-auto custom-scrollbar">
                        <Timeline>
                            {activities.map((group) => (
                                <React.Fragment key={group.id}>
                                    <p className="font-bold">{group.date}</p>

                                    {group.activity.map((activity) => (
                                        <Timeline.Item
                                            media={
                                                <Avatar
                                                    className={` ${activity.avatar ? 'bg-black' : 'bg-gray-400'} `}
                                                    icon={''}
                                                    size={14}
                                                />
                                            }
                                            key={activity.id}
                                        >
                                            <div>
                                                <p className="font-bold">
                                                    {activity.title}
                                                </p>
                                                {activity.details && (
                                                    <p>{activity.details}</p>
                                                )}
                                                <p>{activity.time}</p>
                                            </div>
                                        </Timeline.Item>
                                    ))}
                                </React.Fragment>
                            ))}
                        </Timeline>
                    </div>
                </Card>
            </section>
            <section className="flex flex-col">
                <div className="flex flex-col gap-4 w-full">
                    <Tabs
                        value={currentTab}
                        onChange={(val) => setCurrentTab(val)}
                    >
                        <TabList>
                            <TabNav
                                className={`text-black ${currentTab === 'comments' ? 'border-b-2 border-black' : ''}`}
                                value="comments"
                            >
                                Comments
                            </TabNav>
                            <TabNav
                                className={`text-black ${currentTab === 'attachments' ? 'border-b-2 border-black' : ''}`}
                                value="attachments"
                            >
                                Attachments
                            </TabNav>
                        </TabList>
                        <div className="p-4">
                            <TabContent value="comments">
                                <div className="flex flex-col gap-[30px]">
                                    {commentContent.map((comment) => (
                                        <div className="flex flex-row gap-4">
                                            <div className="size-[60px]">
                                                <img
                                                    src={comment.icon}
                                                    alt=""
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <p className="pb-2">
                                                    <span className="font-semibold">
                                                        {comment.name}{' '}
                                                    </span>{' '}
                                                    | {comment.date}{' '}
                                                </p>
                                                <p>{comment.message}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex flex-row gap-4">
                                        <div className="size-[60px]">
                                            <img
                                                src={user}
                                                alt=""
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="relative w-full">
                                            <textarea
                                                rows={4}
                                                placeholder="Write a comment..."
                                                className="bg-gray-200 w-full rounded-lg p-4"
                                            />
                                            <button className="absolute p-2 text-black right-[10px] bottom-[10px]">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </TabContent>
                            <TabContent value="attachments"></TabContent>
                        </div>
                    </Tabs>
                </div>
            </section>
        </main>
    )
}

export default Overview
