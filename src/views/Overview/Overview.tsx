import {
    Avatar,
    Button,
    Card,
    Select,
    Tag,
    Calendar,
    Timeline,
    Tabs,
    Dropdown,
    Tooltip,
    DatePicker,
} from '@/components/ui'
import React, { useEffect, useRef, useState } from 'react'
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
import mediaImg from '@/assets/Images/dashboard.png'
import { useNavigate } from 'react-router-dom'
import { useThemeStore } from '@/store/themeStore'

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
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Qualification',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Close',
                },
            ],
            title: 'Sales',
            completed: true,
            description: '3 Days',
            icon: <CiUser size={24} className="text-white" />,
        },
        {
            timeSpan: '26 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Intake',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Scheduling',
                },
            ],
            title: 'Processing',
            completed: true,
            description: '26 Days',
            icon: <TbClock size={24} className="text-white" />,
        },
        {
            timeSpan: '8 Months',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Prep',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Perform',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Compliance',
                },
            ],
            title: 'Job',
            completed: false,
            description: '8 Months',
            icon: <BiListCheck size={24} />, // Use IN_PROGRESS instead of 'in_progress'
        },
        {
            // timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Calculate Internal Labor',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Calculate Material',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Collect Deposit',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Collect Balance',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Invoice Received (30 days)',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Update sent (60 days)',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Coverage Requested',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Public Adjuster Compliance',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Inspection',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Desk Adjuster Assigned',
                },
            ],
            title: 'Accounting',
            completed: false,
            description: '9-20-2023',
            icon: <HiOutlineDocumentSearch size={24} />, // Use PENDING instead of 'pending'
        },
        {
            // timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Mediation',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Payment Processed',
                },
            ],
            title: 'Negotiations',
            completed: false,
            description: '9-23-2023',
            icon: <CgSpinner size={24} />,
        },
        {
            // timeSpan: '3 Days',
            date: '9-20-2023',
            tooltipData: [
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Commission Report',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Call client for feedback',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Review received',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Call client for Recommendation',
                },
                {
                    icon: <TbCheck size={20} className="text-green-500" />,
                    value: 'Recommendation received ',
                },
            ],
            title: 'Close Out',
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

    const [selectedTags, setSelectedTags] = useState<string[]>(['Fire', 'Mold'])

    const handleToggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag)) // Remove if already selected
        } else {
            setSelectedTags([...selectedTags, tag]) // Add if not selected
        }
    }

    const tags = [
        { id: 1, title: 'Fire' },
        { id: 2, title: 'Water' },
        { id: 3, title: 'Mold' },
        { id: 4, title: 'Tornado' },
    ]

    const [selectedStages, setSelectedStages] = useState<string[]>([
        'Scheduling',
    ])

    const [selectedDate, setSelectedDate] = useState(new Date())

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'long',
        }).format(date)
    }

    const handleToggleStage = (stage: string) => {
        if (selectedStages.includes(stage)) {
            setSelectedStages(selectedStages.filter((t) => t !== stage)) // Remove if already selected
        } else {
            setSelectedStages([...selectedStages, stage]) // Add if not selected
        }
    }

    const stages = [
        { id: 1, title: 'Scheduling' },
        { id: 2, title: 'Assessment' },
        { id: 3, title: 'Processing' },
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

    const nav = useNavigate()

    const userInfo = {
        city: 'Miami',
        createDate: '2024-06-27',
        email: 'john.smith@email.com',
        id: 1,
        lastTouched: '2024-06-28',
        name: {
            media: '/src/assets/Images/user.png',
            fullName: 'John Smith',
        },
        pa: 'None',
        phone: '(305) 555-7890',
        policyNum: 'FL-123456',
        provider: 'State Farm',
        source: 'Google Ads',
        status: 'New',
        type: 'Water',
    }

    const handleLeads = (item) => {
        nav('/leads-edit', { state: { item } })
    }
    const handleContact = (item) => {
        nav('/contact-edit', { state: { item } })
    }

    const attachmentContent = [
        {
            media: mediaImg,
            name: 'equipment.png',
            size: '1.5 MB',
        },
        {
            media: mediaImg,
            name: 'group.jpg',
            size: '1.5 MB',
        },
    ]

    const milestoneRefs = useRef<(HTMLDivElement | null)[]>([])
    const [lineWidths, setLineWidths] = useState<number[]>([])

    const sideNavCollapse = useThemeStore(
        (state) => state.layout.sideNavCollapse,
    )

    useEffect(() => {
        const updateWidths = () => {
            if (!milestoneRefs.current.length) return

            requestAnimationFrame(() => {
                const newWidths = milestoneRefs.current.map((el, index) => {
                    if (index === 0 || !el) return 0
                    const prevEl = milestoneRefs.current[index - 1]
                    if (!prevEl) return 0

                    return (
                        el.getBoundingClientRect().left -
                        prevEl.getBoundingClientRect().left
                    )
                })

                setLineWidths((prevWidths) =>
                    JSON.stringify(prevWidths) !== JSON.stringify(newWidths)
                        ? newWidths
                        : prevWidths,
                )
            })
        }

        const debounceResize = debounce(updateWidths, 200)

        setTimeout(updateWidths, 50)
        window.addEventListener('resize', debounceResize)

        return () => {
            window.removeEventListener('resize', debounceResize)
        }
    }, [stepsData, sideNavCollapse])

    // Optimized Debounce Function
    function debounce<T extends (...args: any[]) => void>(
        func: T,
        delay: number,
    ): T {
        let timeout: NodeJS.Timeout
        return ((...args: Parameters<T>) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => func(...args), delay)
        }) as T
    }

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
            <section className="grid grid-cols-4 justify-between">
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1">
                        {' '}
                        <span>
                            <TbTag size={20} />
                        </span>{' '}
                        Label
                    </p>
                    {/* <div className="gap-1 flex flex-row">
                        <Tag className="bg-red-300 w-fit">Water</Tag>
                        <Tag className="bg-primary-subtle w-fit">Hurricane</Tag>
                    </div> */}
                    <Dropdown
                        className="w-full h-full"
                        toggleClassName="hover:bg-gray-100 dark:hover:bg-gray-700 flex px-3 focus:bg-gray-100 cursor-pointer rounded-xl min-h-[46px] w-full"
                        placement="bottom-start"
                        renderTitle={
                            <div className="inline-flex items-center gap-1">
                                {selectedTags.map((tag) => (
                                    <Tag
                                        key={tag}
                                        className={`${tag === 'Fire' ? 'bg-red-100' : tag === 'Water' ? 'bg-blue-100' : tag === 'Mold' ? 'bg-green-100' : 'bg-sky-100'}`}
                                    >
                                        {tag}
                                    </Tag>
                                ))}
                            </div>
                        }
                    >
                        {tags.map((tag) => (
                            <Dropdown.Item
                                key={tag.id}
                                onClick={() => handleToggleTag(tag.title)}
                                className="flex items-center justify-start w-full"
                            >
                                <div className="w-2/12">
                                    {selectedTags.includes(tag.title) && (
                                        <TbCheck
                                            size={20}
                                            className="text-green-500"
                                        />
                                    )}
                                </div>
                                {tag.title}
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1">
                        {' '}
                        <span>
                            <TbCircle size={20} />
                        </span>{' '}
                        Stage
                    </p>
                    <Dropdown
                        className="w-full h-full"
                        toggleClassName="hover:bg-gray-100 dark:hover:bg-gray-700 flex px-3 focus:bg-gray-100 cursor-pointer rounded-xl min-h-[46px] w-full"
                        placement="bottom-start"
                        renderTitle={
                            <div className="inline-flex items-center gap-1">
                                {selectedStages.map((stage) => (
                                    <Tag
                                        key={stage}
                                        className={`${stage === 'Assessment' ? 'bg-red-100' : stage === 'Scheduling ' ? 'bg-blue-100' : stage === 'Processing' ? 'bg-green-100' : 'bg-sky-100'}`}
                                    >
                                        {stage}
                                    </Tag>
                                ))}
                            </div>
                        }
                    >
                        {stages.map((stage) => (
                            <Dropdown.Item
                                key={stage.id}
                                onClick={() => handleToggleStage(stage.title)}
                                className="flex items-center justify-start w-full"
                            >
                                <div className="w-2/12">
                                    {selectedStages.includes(stage.title) && (
                                        <TbCheck
                                            size={20}
                                            className="text-green-500"
                                        />
                                    )}
                                </div>
                                {stage.title}
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1">
                        {' '}
                        <span>
                            <TbUser size={20} />
                        </span>{' '}
                        Assigned to
                    </p>
                    <div className="gap-1 flex flex-row">
                        <Avatar src={user} size={'sm'} />
                        <Avatar src={user} size={'sm'} />
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <p className="font-semibold text-black flex items-center gap-1 text-nowrap">
                        {' '}
                        <span>
                            <TbClock size={20} />
                        </span>{' '}
                        Due date
                    </p>
                    <div className="flex items-center gap-1 px-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700 cursor-pointer w-full min-h-[46px] relative">
                        <span className="font-semibold">
                            {formatDate(selectedDate)}
                        </span>
                        <DatePicker
                            className="opacity-0 cursor-pointer absolute"
                            value={selectedDate}
                            inputtable={false}
                            inputPrefix={null}
                            inputSuffix={null}
                            clearable={false}
                            onChange={(date) => setSelectedDate(date)}
                        />
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-[10px]">
                <p className="text-xl font-bold">Milestones</p>
                <div className="w-full py-[10px]">
                    {/* <div className="w-full p-2 flex flex-row justify-between">
                        {stepsData.map((step, index) => (
                            <Tooltip
                                title={
                                    <div>
                                        {step.tooltipData.map(
                                            (data, dataIndex) => (
                                                <div
                                                    className="flex flex-row items-center"
                                                    key={dataIndex}
                                                >
                                                    <span className={'mr-1'}>
                                                        {data.icon}
                                                    </span>
                                                    <p className="text-white font-semibold">
                                                        {data.value}
                                                    </p>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                }
                                className="!bg-[#262626]"
                                key={index}
                            >
                                <div className="flex flex-col items-center justify-center relative">
                                    <div
                                        className={`h-10 w-10 rounded-full flex items-center justify-center border-2 border-primary ${step.completed ? 'bg-primary text-white' : 'bg-primary-subtle text-black'} `}
                                    >
                                        {step.icon}
                                    </div>
                                    <p className="text-center font-bold pt-1">
                                        {step.title}
                                    </p>
                                    <p className="text-center text-[12px] pt-1">
                                        {step.date}
                                    </p>
                                    {step.timeSpan && (
                                        <p className="text-center font-bold absolute top-0 right-[-100%]">
                                            {step.timeSpan}
                                        </p>
                                    )}
                                </div>
                            </Tooltip>
                        ))}
                    </div> */}
                    <div className="w-full p-2 flex items-center justify-between relative">
                        {stepsData.map((step, index) => (
                            <Tooltip
                                title={
                                    <div>
                                        {step.tooltipData.map(
                                            (data, dataIndex) => (
                                                <div
                                                    className="flex flex-row items-center"
                                                    key={dataIndex}
                                                >
                                                    <span className="mr-1">
                                                        {data.icon}
                                                    </span>
                                                    <p className="text-white font-semibold">
                                                        {data.value}
                                                    </p>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                }
                                className="!bg-[#262626]"
                                key={index}
                            >
                                <div
                                    ref={(el) =>
                                        (milestoneRefs.current[index] = el)
                                    }
                                    className="relative flex flex-col items-center"
                                >
                                    {/* Connecting Line */}
                                    {index !== 0 &&
                                        lineWidths[index] !== undefined && (
                                            <div
                                                className="absolute top-[25%] right-[50%] h-[3px] z-[1]"
                                                style={{
                                                    width: `${lineWidths[index]}px`,
                                                    backgroundColor:
                                                        step.completed
                                                            ? '#007bff'
                                                            : '#ccc',
                                                }}
                                            ></div>
                                        )}

                                    {/* Milestone Circle */}
                                    <div
                                        className={`h-10 w-10 rounded-full flex items-center justify-center border-2 border-primary 
                        ${step.completed ? 'bg-primary text-white' : 'bg-gray-100 text-black'} relative z-10`}
                                    >
                                        {step.icon}
                                    </div>

                                    {/* Milestone Details */}
                                    <p className="text-center font-bold pt-1">
                                        {step.title}
                                    </p>
                                    <p className="text-center text-[12px] pt-1">
                                        {step.date}
                                    </p>

                                    {/* Time Span Positioned Between Milestones */}
                                    {index !== 0 && step.timeSpan && (
                                        <p
                                            className="absolute top-[-25px] text-center font-bold"
                                            style={{
                                                right: `${lineWidths[index] / 2}px`,
                                                transform: 'translateX(-50%)',
                                            }}
                                        >
                                            {step.timeSpan}
                                        </p>
                                    )}
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                </div>
                <div className="w-full mx-auto flex flex-row items-center justify-center mt-2">
                    <button className="py-2 px-3 rounded-lg text-lg font-bold bg-primary-mild text-white">
                        Starting Intake Process
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
                        <button
                            onClick={() => handleLeads(userInfo)}
                            className="p-1 rounded-full bg-gray-200"
                        >
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
                        <button
                            onClick={() => handleContact(userInfo)}
                            className="p-1 rounded-full bg-gray-200"
                        >
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
                        <button
                            onClick={() => handleContact(userInfo)}
                            className="p-1 rounded-full bg-gray-200"
                        >
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
                                <div key={group.id}>
                                    <p className="font-bold">{group.date}</p>

                                    {group.activity.map((activity) => (
                                        <Timeline.Item
                                            media={
                                                <Avatar
                                                    className={` ${activity.avatar ? 'bg-blue-500' : 'bg-sky-400'} `}
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
                                </div>
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
                                    {commentContent.map((comment, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-row gap-4"
                                        >
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
                            <TabContent value="attachments">
                                <div className="grid grid-cols-4 gap-4">
                                    {attachmentContent.map(
                                        (attachment, index) => (
                                            <div
                                                key={index}
                                                className="p-3 h-fit rounded-lg bg-[#f5f5f5] w-fit shadow-lg"
                                            >
                                                <div className="min-h-[80px] min-w-[160px] border overflow-hidden rounded-lg">
                                                    <img
                                                        src={attachment.media}
                                                        alt=""
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="pt-1 px-2">
                                                    <p className="font-semibold uppercase pb-1">
                                                        {attachment.name}
                                                    </p>
                                                    <p className="text-xs p-0 leading-[10px] text-gray-400">
                                                        {attachment.size}
                                                    </p>
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </TabContent>
                        </div>
                    </Tabs>
                </div>
            </section>
        </main>
    )
}

export default Overview
