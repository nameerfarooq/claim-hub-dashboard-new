import { AdaptiveCard, Chart, Container } from '@/components/shared'
import {
    Card,
    Button,
    Select,
    Calendar,
    Avatar,
    Tag,
    Segment,
    Badge,
    Timeline,
} from '@/components/ui'
import { HiOutlineUser } from 'react-icons/hi'
import userPng from '@/assets/Images/user.png'
import { BsCameraVideoFill, BsTags } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'
import {
    TbArrowDownToArc,
    TbCalendarStar,
    TbCoffee,
    TbCoin,
    TbCopyCheck,
    TbEye,
    TbProgressBolt,
    TbShoppingBagCheck,
    TbVideo,
} from 'react-icons/tb'
import { LuSquareCheckBig } from 'react-icons/lu'
import { useThemeStore } from '@/store/themeStore'
import { ReactNode, useEffect, useRef, useState } from 'react'
import Overview from './HomeViews/Overview'
import StatisticData from './HomeViews/StatisticData'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const doubleBarData = {
        series: [
            {
                name: 'Finished',
                data: [32, 35, 62, 62, 70, 80, 85],
            },
            {
                name: 'On Going',
                data: [40, 50, 70, 85, 100, 110, 130],
            },
        ],
        xAxis: [
            '21 Jan',
            '22 Jan',
            '23 Jan',
            '24 Jan',
            '25 Jan',
            '26 Jan',
            '27 Jan',
        ],
    }

    const events = [
        {
            id: 1,
            title: 'Daily standup',
            type: 'Meeting',
            time: '10:00 AM',
            icon: <TbVideo />,
            iconColor: 'bg-grape',
        },
        {
            id: 2,
            title: 'Lunch break',
            type: 'Break',
            time: '12:00 PM',
            icon: <TbCoffee />,
            iconColor: 'bg-success-light',
        },
        {
            id: 3,
            title: 'Townhall',
            type: 'Event',
            time: '03:00 PM',
            icon: <TbCalendarStar />,
            iconColor: 'bg-primary-light',
        },
        {
            id: 4,
            title: 'Write daily report',
            type: 'Task',
            time: '05:00 PM',
            icon: <LuSquareCheckBig />,
            iconColor: 'bg-success-light',
        },
        {
            id: 5,
            title: 'Townhall',
            type: 'Event',
            time: '03:00 PM',
            icon: <TbCalendarStar />,
            iconColor: 'bg-primary-light',
        },
        {
            id: 6,
            title: 'Write daily report',
            type: 'Task',
            time: '05:00 PM',
            icon: <LuSquareCheckBig />,
            iconColor: 'bg-success-light',
        },
    ]

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Unable to upload file',
            priority: 'High',
            date: 'August 05',
            icon: <FaCheck />,
            completed: false,
        },
        {
            id: 2,
            title: 'Error in database query',
            priority: 'Medium',
            date: 'July 15',
            icon: <FaCheck />,
            completed: true,
        },
        {
            id: 3,
            title: 'Authentication problem',
            priority: 'High',
            date: 'September 20',
            icon: <FaCheck />,
            completed: false,
        },
        {
            id: 4,
            title: 'Bug in search functionality',
            priority: 'High',
            date: 'September 05',
            icon: <FaCheck />,
            completed: false,
        },
        {
            id: 5,
            title: 'Compatibility issue with Firefox',
            priority: 'Medium',
            date: 'July 25',
            icon: <HiOutlineUser />,
            completed: true,
        },
    ])

    const handleTaskCompletion = (taskId: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task,
            ),
        )
    }

    const activities = [
        {
            id: 1,
            user: 'Angelina Gotelli',
            action: 'Has changed PD-979 status to Completed',

            time: '10:00 AM',
            media: <Avatar className="bg-yellow-100">AG</Avatar>,
        },
        {
            id: 2,
            user: 'Max Alexander',
            action: 'Commented on yout Post',
            details:
                "Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what appliccations SHOULDN'T be like.",
            time: '09:30 AM',
            media: <Avatar src={userPng} />,
        },
        {
            id: 3,
            user: 'Jane Smith',
            action: 'Created a new task',
            time: '08:45 AM',
            media: <Avatar className="bg-yellow-100" icon={<BsTags />} />,
        },
    ]

    const data = StatisticData

    // useeffect to resize window everytime sideNavCollapse changes
    const sideNavCollapse = useThemeStore(
        (state) => state.layout.sideNavCollapse,
    )

    useEffect(() => {
        const resize = () => window.dispatchEvent(new Event('resize'))
        const debounceResize = setTimeout(resize, 300) // Delay execution

        return () => clearTimeout(debounceResize)
    }, [sideNavCollapse])

    const [chartComponent, setChartComponent] = useState<ReactNode>(null)

    useEffect(() => {
        try {
            if (
                doubleBarData?.series.length > 0 &&
                doubleBarData.xAxis.length > 0
            ) {
                setChartComponent(
                    <Chart
                        customOptions={{
                            plotOptions: {
                                bar: {
                                    columnWidth: '55%',
                                    borderRadius: 2,
                                },
                            },
                            colors: ['#00A3FF', '#6A2DE3'],
                            legend: {
                                show: false,
                            },
                        }}
                        type="bar"
                        height={230}
                        series={doubleBarData.series as any}
                        xAxis={doubleBarData.xAxis as any}
                    />,
                )
            } else {
                console.warn('Chart data is empty or not ready')
                setChartComponent(null)
            }
        } catch (error) {
            console.error('Error rendering chart:', error)
            setChartComponent(null)
        }
    }, [])

    const nav = useNavigate()

    return (
        <Container>
            <main className="flex flex-col gap-4 max-w-full">
                <section className="flex flex-col lg:flex-row gap-4 h-full  ">
                    <div className="flex flex-col gap-4 w-full">
                        <Card>
                            <div className="flex flex-row w-full justify-between items-center mb-[10px]">
                                <p className="text-2xl font-bold">Overview</p>
                                <Button
                                    onClick={() => {
                                        nav('/claims-pipeline')
                                    }}
                                    variant="default"
                                >
                                    All Claims
                                </Button>
                            </div>
                            <div className="grid grid-cols-3 gap-4 w-full bg-gray-100 p-[8px] rounded-[20px]">
                                <Card bordered={false} className="!shadow-none">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex flex-col gap-[10px]">
                                            <p className="text-sm font-bold">
                                                Sales
                                            </p>
                                            <p className="text-3xl font-bold">
                                                12
                                            </p>
                                        </div>
                                        <Avatar
                                            className="bg-primary-light"
                                            icon={<TbProgressBolt />}
                                        />
                                    </div>
                                </Card>
                                <Card bordered={false} className="!shadow-none">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex flex-col gap-[10px]">
                                            <p className="text-sm font-bold">
                                                Processing
                                            </p>
                                            <p className="text-3xl font-bold">
                                                68
                                            </p>
                                        </div>
                                        <Avatar
                                            className="bg-success-light"
                                            icon={<TbCopyCheck />}
                                        />
                                    </div>
                                </Card>
                                <Card bordered={false} className="!shadow-none">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex flex-col gap-[10px]">
                                            <p className="text-sm font-bold">
                                                Job
                                            </p>
                                            <p className="text-3xl font-bold">
                                                7
                                            </p>
                                        </div>
                                        <Avatar
                                            className="bg-grape"
                                            icon={<TbArrowDownToArc />}
                                        />
                                    </div>
                                </Card>
                            </div>
                        </Card>
                        <Overview data={data} />
                        {/* <div className="bg-white p-4 rounded-2xl border border-gray-200">
                            <div className="flex flex-row w-full justify-between items-center mb-[10px]">
                                <p className="text-2xl font-bold">Overview</p>
                                <Select
                                    options={[
                                        { label: 'Monthly', value: 'monthly' },
                                        { label: 'Yearly', value: 'yearly' },
                                    ]}
                                    defaultValue={{
                                        label: 'Monthly',
                                        value: 'monthly',
                                    }}
                                >
                                    All Claims
                                </Select>
                            </div>
                            <div className="grid grid-cols-3 gap-4 w-full bg-gray-100 p-[8px] rounded-[20px]">
                                <Card
                                    bordered={false}
                                    className="!shadow-none !shadow-gray-100"
                                >
                                    <div className="flex flex-row justify-between items-start">
                                        <div className="flex flex-col gap-[10px]">
                                            <p className="text-sm font-semibold">
                                                Total Revenue
                                            </p>
                                            <div>
                                                <h5 className="text-2xl font-bold">
                                                    $82,373.21
                                                </h5>
                                                <p className="text-black text-sm font-semibold">
                                                    <span className="text-success font-bold">
                                                        +3.4%{' '}
                                                    </span>
                                                    from last month
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <Avatar
                                                className="bg-success-light"
                                                icon={<TbCoin />}
                                            />
                                        </div>
                                    </div>
                                </Card>
                                <Card
                                    bordered={false}
                                    className="!shadow-none !shadow-gray-100 !bg-gray-100"
                                >
                                    <div className="flex flex-row justify-between items-start">
                                        <div className="flex flex-col gap-[10px]">
                                            <p className="text-sm font-semibold">
                                                Total Profit
                                            </p>
                                            <div>
                                                <h5 className="text-2xl font-bold">
                                                    7,234
                                                </h5>
                                                <p className="text-black text-sm font-semibold">
                                                    <span className="text-error font-bold">
                                                        -2.8%{' '}
                                                    </span>
                                                    from last month
                                                </p>
                                            </div>
                                        </div>
                                        <Avatar
                                            className="bg-grape"
                                            icon={<TbShoppingBagCheck />}
                                        />
                                    </div>
                                </Card>
                                <Card
                                    bordered={false}
                                    className="!shadow-none !shadow-gray-100 !bg-gray-100"
                                >
                                    <div className="flex flex-row justify-between items-start">
                                        <div className="flex flex-col gap-[10px]">
                                            <p className="text-sm font-semibold">
                                                Total Claims
                                            </p>
                                            <div>
                                                <h5 className="text-2xl font-bold">
                                                    3.1M
                                                </h5>
                                                <p className="text-black text-sm font-semibold">
                                                    <span className="text-success font-bold">
                                                        +4.6%{' '}
                                                    </span>
                                                    from last month
                                                </p>
                                            </div>
                                        </div>
                                        <Avatar
                                            className="bg-primary-light"
                                            icon={<TbEye />}
                                        />
                                    </div>
                                </Card>
                            </div>
                            <Chart
                                key={chartKey}
                                type="area"
                                series={areaData.series}
                                xAxis={areaData.xAxis}
                                height={350}
                            />
                        </div> */}
                    </div>
                    <div className="h-full w-auto">
                        <div className="bg-white p-4 rounded-2xl border border-gray-200">
                            <Calendar />
                            <div className="mt-5 flex flex-col gap-[20px]">
                                <p className="text-lg font-bold">
                                    Schedule Today
                                </p>
                                <div>
                                    {events.map((event) => (
                                        <div key={event.id} className="mb-4">
                                            <Card
                                                bordered={true}
                                                className="border-white"
                                                bodyClass="p-0"
                                            >
                                                <div className="flex flex-row w-full gap-2 justify-start items-center">
                                                    <div className="">
                                                        <Avatar
                                                            className={`${event.iconColor} rounded-lg`}
                                                            icon={event.icon}
                                                            shape="square"
                                                        />
                                                    </div>
                                                    <div className="h-full flex flex-row justify-between w-full items-center">
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
                                <Button variant="default">Add Event</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col lg:flex-row gap-4 h-full">
                    <div className="w-full lg:w-4/12 h-full">
                        <div className="bg-white p-4 rounded-2xl border border-gray-200 h-full">
                            <div className="flex flex-row w-full justify-between items-center pb-[20px]">
                                <p className="text-xl font-bold">
                                    Current tasks
                                </p>
                                <Button variant="default">All tasks</Button>
                            </div>
                            <div className="flex flex-col gap-[10px] min-h-[270px] overflow-auto custom-scrollbar pr-2">
                                {tasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className="pb-2 border-b"
                                    >
                                        <Card
                                            bordered={true}
                                            className="border-white"
                                            bodyClass="p-0"
                                        >
                                            <div className="flex flex-row justify-between items-center gap-[10px]">
                                                <div className="w-fit">
                                                    <Button
                                                        onClick={() =>
                                                            handleTaskCompletion(
                                                                task.id,
                                                            )
                                                        }
                                                        className={`rounded-full size-[24px] p-1 ${task.completed ? 'bg-black text-white' : 'bg-white text-black'}`}
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
                                                        className={`${task.priority === 'Low' ? 'bg-success-light' : task.priority === 'Medium' ? 'bg-[#bafdfa]' : 'bg-red-300'}`}
                                                    >
                                                        {task.priority}
                                                    </Tag>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 h-full">
                        <div className="bg-white p-4 rounded-2xl border border-gray-200 h-full">
                            <div className="flex flex-row w-full justify-between items-center pb-[20px]">
                                <p className="text-xl font-bold">
                                    Task overview
                                </p>
                                <Segment defaultValue="daily">
                                    <Segment.Item
                                        activeClassName="bg-white text-black shadow"
                                        value="daily"
                                    >
                                        Daily
                                    </Segment.Item>
                                    <Segment.Item
                                        activeClassName="bg-white text-black shadow"
                                        value="weekly"
                                    >
                                        Weekly
                                    </Segment.Item>
                                </Segment>
                            </div>
                            <div className="flex flex-row justify-between w-full items-center">
                                <div>
                                    <p className="text-lg font-bold">213</p>
                                    <p className="text-sm font-medium">
                                        Total Tasks
                                    </p>
                                </div>
                                <div className="flex flex-row items-center gap-[10px]">
                                    <div className="flex flex-col ">
                                        <div className="flex flex-row items-center">
                                            <Badge innerClass="bg-black" />
                                            <p className="ml-1 text-lg font-bold">
                                                126
                                            </p>
                                        </div>
                                        <p className="ml-4 text-sm font-medium">
                                            On Going
                                        </p>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="flex flex-row items-center">
                                            <Badge innerClass="bg-black" />
                                            <p className="ml-1 text-lg font-bold">
                                                87
                                            </p>
                                        </div>
                                        <p className="ml-4 text-sm font-medium">
                                            Finished
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>{doubleBarData && chartComponent}</div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12">
                        <div className="bg-white p-4 rounded-2xl border border-gray-200 h-full">
                            <div className="flex flex-row w-full justify-between items-center pb-[20px]">
                                <p className="text-xl font-bold">
                                    Recent activity
                                </p>
                                <Button variant="default">View all</Button>
                            </div>
                            <div className="h-[290px] overflow-auto custom-scrollbar">
                                <Timeline className="pr-[10px]">
                                    {activities.map((activity) => (
                                        <Timeline.Item
                                            key={activity.id}
                                            media={activity.media}
                                        >
                                            <div className="flex flex-col gap-[8px]">
                                                <div className="flex flex-col gap-[0px]">
                                                    <p className="font-semibold text-sm">
                                                        {activity.user}
                                                    </p>
                                                    <p className="text-xs font-semibold">
                                                        {activity.time}
                                                    </p>
                                                </div>
                                                <p className="text-sm font-medium">
                                                    {activity.action}
                                                </p>
                                                {activity.details && (
                                                    <p className="text-sm bg-gray-100 rounded-lg py-[20px] px-[15px]">
                                                        {activity.details}
                                                    </p>
                                                )}
                                            </div>
                                        </Timeline.Item>
                                    ))}
                                </Timeline>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Container>
    )
}

export default Home
