import { useState, useEffect } from 'react'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Log from './components/Log'
import LogAction from './components/LogAction'
import { apiGetLogs } from '@/services/LogService'
import {
    UPDATE_TICKET,
    COMMENT,
    COMMENT_MENTION,
    ASSIGN_TICKET,
    ADD_TAGS_TO_TICKET,
    ADD_FILES_TO_TICKET,
    CREATE_TICKET,
} from '@/components/view/Activity/constants'
import type { GetActivityLogResponse, Activity } from './types'
import user from '@/assets/Images/user.png'

const defaultSelectedType = [
    UPDATE_TICKET,
    COMMENT,
    COMMENT_MENTION,
    ASSIGN_TICKET,
    ADD_TAGS_TO_TICKET,
    ADD_FILES_TO_TICKET,
    CREATE_TICKET,
]

const Main = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [loadable, seLoadable] = useState(true)
    const [activities, setActivities] = useState<Activity[]>([])
    const [activityIndex, setActivityIndex] = useState(1)
    const [showMentionedOnly, setShowMentionedOnly] = useState(false)
    const [selectedType, setSelectedType] =
        useState<string[]>(defaultSelectedType)
    const data = [
        {
            id: '1',
            date: 1646554397,
            events: [
                {
                    dateTime: 1646580000,
                    status: 0,
                    ticket: 'PD-979',
                    type: 'UPDATE-TICKET',
                    userImg: user,
                    userName: 'Angelina Gotelli',
                },
                {
                    comment:
                        "Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like.",
                    dateTime: 1646578417,
                    type: 'COMMENT',
                    userImg: '/img/avatars/thumb-3.jpg',
                    userName: 'Max Alexander',
                },
                {
                    dateTime: 1646574027,
                    tags: ['Live Issue', 'Backend'],
                    type: 'ADD-TAGS-TO-TICKET',
                    userName: 'Eugene Stewart',
                },
                {
                    dateTime: 1646569123,
                    files: ['document.csv'],
                    type: 'ADD-FILES-TO-TICKET',
                    ticket: 'PD-1092',
                    userName: 'Shannon Baker',
                },
                {
                    comment:
                        '<strong>@Carolyn</strong> One of the main causes of the fall of the Roman Empire was that-lacking zero-they had no way to indicate successful termination of their C programs.',
                    dateTime: 1646565473,
                    type: 'COMMENT-MENTION',
                    userImg: '/img/avatars/thumb-7.jpg',
                    userName: 'Roberta Horton',
                },
                {
                    assignee: 'Alvin Moreno',
                    dateTime: 1646554397,
                    ticket: 'PD-1092',
                    type: 'ASSIGN-TICKET',
                    userName: 'Lee Wheeler',
                },
            ],
        },
        {
            id: '2',
            date: 1646450000,
            events: [
                {
                    comment:
                        "The trouble with programmers is that you can never tell what a programmer is doing until it's too late.",
                    dateTime: 1646459376,
                    type: 'COMMENT',
                    userImg: '/img/avatars/thumb-8.jpg',
                    userName: 'Jessica Wells',
                },
                {
                    dateTime: 1646458211,
                    status: 1,
                    ticket: 'PD-977',
                    type: 'UPDATE-TICKET',
                    userImg: '/img/avatars/thumb-10.jpg',
                    userName: 'Earl Miles',
                },
                {
                    dateTime: 1646457743,
                    ticket: 'PD-977',
                    type: 'CREATE-TICKET',
                    userName: 'Arlene Pierce',
                },
                {
                    dateTime: 1646456743,
                    tags: ['Bug'],
                    type: 'ADD-TAGS-TO-TICKET',
                    userName: 'Terrance Moreno',
                },
                {
                    dateTime: 1646455743,
                    status: 2,
                    ticket: 'PD-902',
                    type: 'UPDATE-TICKET',
                    userName: 'Jackie Soto',
                },
            ],
        },
        {
            id: '3',
            date: 1646350000,
            events: [
                {
                    dateTime: 1646356928,
                    status: 0,
                    ticket: 'PD-915',
                    type: 'UPDATE-TICKET',
                    userImg: '/img/avatars/thumb-14.jpg',
                    userName: 'Alvin Moreno',
                },
                {
                    comment:
                        '<strong>@Carolyn</strong> First, solve the problem. Then, write the code.',
                    dateTime: 1646356103,
                    type: 'COMMENT-MENTION',
                    userImg: '/img/avatars/thumb-7.jpg',
                    userName: 'Roberta Horton',
                },
                {
                    dateTime: 1646354001,
                    files: ['issue-1.jpg', 'issue-2.jpg'],
                    ticket: 'PD-1011',
                    type: 'ADD-FILES-TO-TICKET',
                    userName: 'Shannon Baker',
                },
                {
                    dateTime: 1646353299,
                    ticket: 'PD-983',
                    type: 'CREATE-TICKET',
                    userName: 'Eugene Stewart',
                },
                {
                    comment:
                        "I've noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture. Near as I can tell, this coincides with the release of MS-DOS.",
                    dateTime: 1646351233,
                    type: 'COMMENT',
                    userImg: '/img/avatars/thumb-4.jpg',
                    userName: 'Shannon Baker',
                },
            ],
        },
    ]
    const getLogs = async (index: number) => {
        setIsLoading(true)
        // const resp = await apiGetLogs<
        //     GetActivityLogResponse,
        //     { activityIndex: number }
        // >({ activityIndex: index })
        const resp = {
            data: [
                {
                    id: '1',
                    date: 1646580000,
                    events: [
                        {
                            dateTime: 1646580000,
                            status: 1,
                            ticket: 'C-2045',
                            type: 'UPDATE-TICKET',
                            userName: 'Angelina Torres',
                            userImg: user,
                            comment: 'Claim status updated to ✅ Completed',
                        },
                        {
                            comment:
                                'The mold remediation is 90% done, just waiting for final air quality test results.',
                            dateTime: 1646578417,
                            type: 'COMMENT',
                            // userImg: '/img/avatars/thumb-3.jpg',
                            userName: 'Michael Rodriguez',
                        },
                        {
                            dateTime: 1646574027,
                            tags: ['Urgent Issue', 'Water Damage'],
                            type: 'ADD-TAGS-TO-TICKET',
                            userName: 'David Martinez',
                        },
                        {
                            dateTime: 1646569123,
                            files: ['policy_document.pdf'],
                            ticket: 'C-2052',
                            type: 'ADD-FILES-TO-TICKET',
                            userName: 'Sophia Rivera',
                        },
                        {
                            comment:
                                'Can you verify if the insurance adjuster has approved the cost revision?',
                            dateTime: 1646565473,
                            type: 'COMMENT-MENTION',
                            // userImg: '/img/avatars/thumb-7.jpg',
                            userName: 'Roberta Horton',
                        },
                        {
                            assignee: 'Alvin Moreno',
                            dateTime: 1646554397,
                            ticket: 'C-2052',
                            type: 'ASSIGN-TICKET',
                            userName: 'Lee Wheeler',
                        },
                    ],
                },
                {
                    id: '2',
                    date: 1646450000,
                    events: [
                        {
                            dateTime: 1646459376,
                            status: 1,
                            ticket: 'C-2048',
                            type: 'SCHEDULE-INSPECTION',
                            userImg: user,
                            userName: 'Carlos Ramirez',
                            comment: 'Inspection scheduled',
                        },
                        {
                            dateTime: 1646458211,
                            status: 2,
                            ticket: 'C-2034',
                            type: 'APPROVE-INVOICE',
                            // userImg: '/img/avatars/thumb-10.jpg',
                            userName: 'Emma Johnson',
                            comment: 'Invoice approved',
                        },
                        {
                            dateTime: 1646457743,
                            ticket: 'C-2049',
                            type: 'ESCALATE-CLAIM',
                            userName: 'David Wilson',
                            comment:
                                'Escalated for legal review 🚨 High Priority',
                        },
                        {
                            dateTime: 1646456743,
                            status: 0,
                            ticket: 'C-2028',
                            type: 'UPDATE-PAYMENT',
                            userName: 'Jessica Lee',
                            comment:
                                'Payment status updated to Pending Insurance Approval',
                        },
                        {
                            dateTime: 1646455743,
                            files: ['before_after_photos.jpg'],
                            ticket: 'C-2039',
                            type: 'UPLOAD-FILES',
                            userName: 'John Peterson',
                            comment: 'Uploaded before/after photos',
                        },
                    ],
                },
            ],
            loadable: true,
        }

        const mappedActivities = resp.data.map((activity) => ({
            ...activity,
            events: activity.events.map((event) => ({
                ...event,
                dateTime: new Date(event.dateTime * 1000),
            })),
        }))
        setActivities((prevActivities) => [
            ...prevActivities,
            ...mappedActivities,
        ])
        seLoadable(resp.loadable)
        setIsLoading(false)
    }

    useEffect(() => {
        getLogs(activityIndex)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleFilterChange = (selected: string) => {
        setShowMentionedOnly(false)
        if (selectedType.includes(selected)) {
            setSelectedType((prevData) =>
                prevData.filter((prev) => prev !== selected),
            )
        } else {
            setSelectedType((prevData) => [...prevData, ...[selected]])
        }
    }

    const handleLoadMore = () => {
        setActivityIndex((prevIndex) => prevIndex + 1)
        getLogs(activityIndex + 1)
    }

    const handleCheckboxChange = (bool: boolean) => {
        setShowMentionedOnly(bool)
        if (bool) {
            setSelectedType([COMMENT_MENTION])
        } else {
            setSelectedType(defaultSelectedType)
        }
    }

    return (
        <AdaptiveCard>
            <div className="max-w-[800px] mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h3>Acitvity log</h3>
                    <LogAction
                        selectedType={selectedType}
                        showMentionedOnly={showMentionedOnly}
                        onFilterChange={handleFilterChange}
                        onCheckboxChange={handleCheckboxChange}
                    />
                </div>
                <Log
                    isLoading={isLoading}
                    loadable={loadable}
                    activities={activities}
                    filter={selectedType}
                    onLoadMore={handleLoadMore}
                />
            </div>
        </AdaptiveCard>
    )
}

export default Main
