import {
    Button,
    Card,
    Dialog,
    FormItem,
    Input,
    Segment,
    Select,
    Switcher,
} from '@/components/ui'
import React, { useState } from 'react'
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdPersonAddAlt,
} from 'react-icons/md'
import GanttChart from '@/components/shared/GanttChart'
import getStartEndDateForProject from '@/components/shared/GanttChart/getStartEndDateForProject'
import type { ExtendedTask } from '@/components/shared/GanttChart'

type ScheduleProps = {
    data: ExtendedTask[]
}

const colorsMap = {
    overallDesign: '#fbbf24',
    design: '#fdba74',
    overallDevelopment: '#6ee7b7',
    development: '#7dd3fc',
}

const Scheduler = ({ data = [] }: ScheduleProps) => {
    console.log('data', data)
    const [activeValue, setActiveValue] = useState('month')

    const segmentValues = ['month', 'week', 'day']

    const handleArrowClick = (direction: 'left' | 'right') => {
        const currentIndex = segmentValues.indexOf(activeValue)
        let newIndex

        if (direction === 'right') {
            newIndex = (currentIndex + 1) % segmentValues.length
        } else {
            newIndex =
                (currentIndex - 1 + segmentValues.length) % segmentValues.length
        }

        setActiveValue(segmentValues[newIndex])
    }

    const [tasks, setTasks] = useState<ExtendedTask[]>(data)

    const handleTaskChange = (task: ExtendedTask) => {
        let newTasks = tasks.map((t) => (t.id === task.id ? task : t))
        if (task.project) {
            const [start, end] = getStartEndDateForProject(
                newTasks,
                task.project,
            )
            const project =
                newTasks[newTasks.findIndex((t) => t.id === task.project)]
            if (
                project.start.getTime() !== start.getTime() ||
                project.end.getTime() !== end.getTime()
            ) {
                const changedProject = { ...project, start, end }
                newTasks = newTasks.map((t) =>
                    t.id === task.project ? changedProject : t,
                )
            }
        }
        setTasks(newTasks)
    }

    const handleProgressChange = async (task: ExtendedTask) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)))
    }

    const handleExpanderClick = (task: ExtendedTask) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)))
    }

    const [dialogIsOpen, setIsOpen] = useState(false)

    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = (e: MouseEvent) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e: MouseEvent) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }

    return (
        <main className="flex flex-col gap-[30px]">
            <div className="flex flex-row items-center justify-between">
                <p className="text-2xl font-bold">Jobs Scheduler</p>
                <div className="flex flex-row items-center gap-[10px]">
                    <button
                        onClick={() => openDialog()}
                        className="p-3 bg-primary-mild text-white flex flex-row items-center rounded-xl gap-[10px] font-bold"
                    >
                        <MdPersonAddAlt size={20} />
                        Schedule Claim Job
                    </button>
                    <Dialog isOpen={dialogIsOpen} closable={false}>
                        <h5 className="mb-4">Schedule Claim Job</h5>
                        <div className="flex flex-col gap-4">
                            <div className="max-h-96 overflow-y-auto custom-scrollbar p-4">
                                <FormItem label="Task Name">
                                    <Input type="text" />
                                </FormItem>
                                <FormItem label="Task Type">
                                    <Select
                                        options={[
                                            {
                                                label: 'Inspection',
                                                value: 'inspection',
                                            },
                                            {
                                                label: 'Evaluation',
                                                value: 'evaluation',
                                            },
                                        ]}
                                    />
                                </FormItem>
                                <FormItem label="Claim Details">
                                    <Select
                                        options={[
                                            {
                                                label: 'Claim#123455, Client: John Smith',
                                                value: 'claim#123455',
                                            },
                                            {
                                                label: 'Claim#123456, Client: John Wick',
                                                value: 'Claim#123456',
                                            },
                                        ]}
                                    />
                                </FormItem>
                                <FormItem label="Start Date & Time">
                                    <Select
                                        options={[
                                            {
                                                label: '12-03-2024, 10:00 AM',
                                                value: '1',
                                            },
                                            {
                                                label: '12-05-2024, 12:00 AM',
                                                value: '2',
                                            },
                                        ]}
                                    />
                                </FormItem>
                                <FormItem label="End Date & Time">
                                    <Select
                                        options={[
                                            {
                                                label: '12-03-2024, 10:00 AM',
                                                value: '1',
                                            },
                                            {
                                                label: '12-05-2024, 12:00 AM',
                                                value: '2',
                                            },
                                        ]}
                                    />
                                </FormItem>
                                <FormItem label="Estimated Duration">
                                    <Select
                                        options={[
                                            {
                                                label: '2 Hours',
                                                value: '1',
                                            },
                                            {
                                                label: '4 Hours',
                                                value: '2',
                                            },
                                        ]}
                                    />
                                </FormItem>
                                <FormItem label="Assign To">
                                    <Select
                                        options={[
                                            {
                                                label: 'Sarah Lee',
                                                value: '1',
                                            },
                                            {
                                                label: 'Stan Lee',
                                                value: '2',
                                            },
                                        ]}
                                    />
                                </FormItem>
                                <FormItem label="Add Followers">
                                    <Select
                                        isMulti
                                        options={[
                                            {
                                                label: 'John Doe',
                                                value: '1',
                                            },
                                            {
                                                label: 'Barry Allen',
                                                value: '2',
                                            },
                                        ]}
                                    />
                                </FormItem>
                                <FormItem label="Special Instructions">
                                    <Select
                                        isMulti
                                        options={[
                                            {
                                                label: 'Check the crawl space for mold growth',
                                                value: '1',
                                            },
                                            {
                                                label: 'Beware of the Dog. He Bites!',
                                                value: '2',
                                            },
                                        ]}
                                    />
                                </FormItem>
                                <FormItem label="Notification">
                                    <Switcher />
                                </FormItem>
                            </div>
                        </div>
                        <div className="text-right mt-6">
                            <Button
                                className="ltr:mr-2 rtl:ml-2"
                                variant="plain"
                                onClick={onDialogClose}
                            >
                                Reset
                            </Button>
                            <Button variant="solid" onClick={onDialogOk}>
                                Submit
                            </Button>
                        </div>
                    </Dialog>
                    <Segment
                        className="bg-white border"
                        value={activeValue}
                        onChange={(value) => setActiveValue(value as string)}
                    >
                        <Segment.Item
                            className=""
                            activeClassName="text-white bg-primary-mild"
                            inactiveClassName="bg-white"
                            value="month"
                        >
                            Month
                        </Segment.Item>
                        <Segment.Item
                            className=""
                            activeClassName="text-white bg-primary-mild"
                            inactiveClassName="bg-white"
                            value="week"
                        >
                            Week
                        </Segment.Item>
                        <Segment.Item
                            className=""
                            activeClassName="text-white bg-primary-mild"
                            inactiveClassName="bg-white"
                            value="day"
                        >
                            Day
                        </Segment.Item>
                    </Segment>

                    <Segment>
                        <Segment.Item
                            value="left"
                            onClick={() => handleArrowClick('left')}
                        >
                            <MdOutlineKeyboardArrowLeft />
                        </Segment.Item>
                        <Segment.Item
                            value="right"
                            onClick={() => handleArrowClick('right')}
                        >
                            <MdOutlineKeyboardArrowRight />
                        </Segment.Item>
                    </Segment>
                </div>
            </div>
            <Card>
                <div>
                    <h4>Schedule</h4>
                </div>
                <div className="mt-4 ">
                    <GanttChart
                        tasks={tasks}
                        colorsMap={colorsMap}
                        onDateChange={handleTaskChange}
                        onProgressChange={handleProgressChange}
                        onExpanderClick={handleExpanderClick}
                    />
                </div>
            </Card>
        </main>
    )
}

export default Scheduler
