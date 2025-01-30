import useSWR from 'swr'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import { useTasksStore } from './store/tasksStore'
import {
    apiGetProjectTasks,
    apiGetProjectMembers,
} from '@/services/ProjectService'
import TasksHeader from './components/TasksHeader'
import TaskList from './components/TaskList'
import type { GetTasksResponse, GetProjectMembersResponse } from './types'
import { useEffect } from 'react'

const Tasks = () => {
    const {
        updateOrdered,
        updateGroups,
        updateBoardMembers,
        updateAllMembers,
    } = useTasksStore()

    // useSWR(
    //     ['/api/projects/tasks'],
    //     () => apiGetProjectTasks<GetTasksResponse>(),
    //     {
    //         revalidateOnFocus: false,
    //         revalidateIfStale: false,
    //         revalidateOnReconnect: false,
    //         onSuccess: (data) => {
    //             console.log('tasks', data)
    //             updateOrdered(Object.keys(data))
    //             updateGroups(data)
    //         },
    //     },
    // )

    // useSWR(
    //     ['/api/projects/task/members'],
    //     () => apiGetProjectMembers<GetProjectMembersResponse>(),
    //     {
    //         revalidateOnFocus: false,
    //         revalidateIfStale: false,
    //         revalidateOnReconnect: false,
    //         onSuccess: (data) => {
    //             updateBoardMembers(data.participantMembers)
    //             updateAllMembers(data.allMembers)
    //         },
    //     },
    // )

    const staticMembers = {
        allMembers: [
            {
                email: 'eileen_h@hotmail.com',
                id: '1',
                img: '/img/avatars/thumb-1.jpg',
                name: 'Angelina Gotelli',
            },
            {
                email: 'terrance_moreno@infotech.io',
                id: '2',
                img: '/img/avatars/thumb-2.jpg',
                name: 'Jeremiah Minsk',
            },
            {
                email: 'ronnie_vergas@infotech.io',
                id: '3',
                img: '/img/avatars/thumb-3.jpg',
                name: 'Max Alexander',
            },
            {
                email: 'cookie_lukie@hotmail.com',
                id: '4',
                img: '/img/avatars/thumb-4.jpg',
                name: 'Shannon Baker',
            },
            {
                email: 'joyce991@infotech.io',
                id: '5',
                img: '/img/avatars/thumb-5.jpg',
                name: 'Eugene Stewart',
            },
            {
                email: 'samanthaphil@infotech.io',
                id: '6',
                img: '/img/avatars/thumb-6.jpg',
                name: 'Arlene Pierce',
            },
            {
                email: 'taratarara@imaze.edu.du',
                id: '7',
                img: '/img/avatars/thumb-7.jpg',
                name: 'Roberta Horton',
            },
            {
                email: 'iamfred@imaze.infotech.io',
                id: '8',
                img: '/img/avatars/thumb-8.jpg',
                name: 'Jessica Wells',
            },
            {
                email: 'carolyn_h@gmail.com',
                id: '9',
                img: '/img/avatars/thumb-9.jpg',
                name: 'Camila Simmmons',
            },
            {
                email: 'brittany1134@gmail.com',
                id: '10',
                img: '/img/avatars/thumb-10.jpg',
                name: 'Earl Miles',
            },
            {
                email: 'handsome-obrien@hotmail.com',
                id: '11',
                img: '/img/avatars/thumb-11.jpg',
                name: 'Steve Sutton',
            },
            {
                email: 'maymaymay12@infotech.io',
                id: '12',
                img: '/img/avatars/thumb-12.jpg',
                name: 'Miriam Herrera',
            },
            {
                email: 'lee_wheeler@infotech.io',
                id: '13',
                img: '/img/avatars/thumb-13.jpg',
                name: 'Cassandra Murray',
            },
            {
                email: 'gailby0116@infotech.io',
                id: '14',
                img: '/img/avatars/thumb-14.jpg',
                name: 'Alvin Moreno',
            },
            {
                email: 'ella_robinson@infotech.io',
                id: '15',
                img: '/img/avatars/thumb-15.jpg',
                name: 'Jackie Soto',
            },
        ],
        participantMembers: [
            {
                email: 'eileen_h@hotmail.com',
                id: '1',
                img: '/img/avatars/thumb-1.jpg',
                name: 'Angelina Gotelli',
            },
            {
                email: 'terrance_moreno@infotech.io',
                id: '2',
                img: '/img/avatars/thumb-2.jpg',
                name: 'Jeremiah Minsk',
            },
            {
                email: 'ronnie_vergas@infotech.io',
                id: '3',
                img: '/img/avatars/thumb-3.jpg',
                name: 'Max Alexander',
            },
            {
                email: 'cookie_lukie@hotmail.com',
                id: '4',
                img: '/img/avatars/thumb-4.jpg',
                name: 'Shannon Baker',
            },
            {
                email: 'taratarara@imaze.edu.du',
                id: '7',
                img: '/img/avatars/thumb-7.jpg',
                name: 'Roberta Horton',
            },
            {
                email: 'carolyn_h@gmail.com',
                id: '9',
                img: '/img/avatars/thumb-9.jpg',
                name: 'Camila Simmmons',
            },
            {
                email: 'brittany1134@gmail.com',
                id: '10',
                img: '/img/avatars/thumb-10.jpg',
                name: 'Earl Miles',
            },
        ],
    }

    const staticTasks = {
        Development: [
            {
                assignee: {
                    name: 'Jeremiah Minsk',
                    img: '/img/avatars/thumb-2.jpg',
                },
                checked: false,
                dueDate: '2024-08-30T00:00:00.000Z',
                id: '9ff33d5e-2f1c-4b20-b8ae-2241ed9cc624',
                name: 'Performance optimization',
                priority: 'Medium',
                progress: 'Pending',
            },
            {
                assignee: {
                    name: 'Jeremiah Minsk',
                    img: '/img/avatars/thumb-2.jpg',
                },
                checked: false,
                dueDate: '2024-10-15T00:00:00.000Z',
                id: 'a6951cbb-fb0d-4223-b73a-8b8b9e40f0d2',
                name: 'Payment gateway integration',
                priority: 'Low',
                progress: 'Pending',
            },
            {
                assignee: {
                    name: 'Max Alexander',
                    img: '/img/avatars/thumb-3.jpg',
                },
                checked: false,
                dueDate: '2024-08-10T00:00:00.000Z',
                id: 'b671d721-4d5e-4b63-8827-739e8d5cb22c',
                name: 'Update user profile page layout',
                priority: 'High',
                progress: 'In Progress',
            },
            {
                assignee: {
                    name: 'Arlene Pierce',
                    img: '/img/avatars/thumb-6.jpg',
                },
                checked: false,
                dueDate: '2024-08-20T00:00:00.000Z',
                id: 'f4d29527-84e6-4702-92d6-805b6a703dc8',
                name: 'Enhance security measures',
                priority: 'Medium',
                progress: 'Pending',
            },
        ],
        Planning: [
            {
                assignee: {
                    name: 'Jeremiah Minsk',
                    img: '/img/avatars/thumb-2.jpg',
                },
                checked: false,
                dueDate: '2024-09-30T00:00:00.000Z',
                id: '8e00e8d5-b87e-4c97-8d80-695ff91f50b0',
                name: 'Strategic Project Roadmap Planning',
                priority: 'High',
                progress: 'In Progress',
            },
            {
                assignee: {
                    name: 'Arlene Pierce',
                    img: '/img/avatars/thumb-6.jpg',
                },
                checked: false,
                dueDate: '2024-08-20T00:00:00.000Z',
                id: 'a1a1d440-8f4c-4be4-a92b-249107fd4e1d',
                name: 'Quarterly Resource Allocation Plan',
                priority: 'Medium',
                progress: 'Pending',
            },
            {
                assignee: {
                    name: 'Angelina Gotelli',
                    img: '/img/avatars/thumb-1.jpg',
                },
                checked: false,
                dueDate: '2024-10-10T00:00:00.000Z',
                id: 'c18b5a49-43f1-4dd3-bf5a-3f4e5e4b3db2',
                name: 'Strategic Business Planning Session',
                priority: 'Low',
                progress: 'Pending',
            },
        ],
        UI_UX: [
            {
                assignee: {
                    name: 'Jeremiah Minsk',
                    img: '/img/avatars/thumb-2.jpg',
                },
                checked: false,
                dueDate: '2024-09-25T00:00:00.000Z',
                id: 'b8d49ba2-ae0e-4567-aa82-ef057f0a2d2b',
                name: 'UI Layout Adjustment for Dashboard',
                priority: 'High',
                progress: 'In Progress',
            },
            {
                assignee: {
                    name: 'Arlene Pierce',
                    img: '/img/avatars/thumb-6.jpg',
                },
                checked: false,
                dueDate: '2024-08-15T00:00:00.000Z',
                id: 'fffb790d-fc52-4df6-8403-07128cc6fb31',
                name: 'UX Improvement for Onboarding Process',
                priority: 'Medium',
                progress: 'Pending',
            },
            {
                assignee: {
                    name: 'Angelina Gotelli',
                    img: '/img/avatars/thumb-1.jpg',
                },
                checked: false,
                dueDate: '2024-10-05T00:00:00.000Z',
                id: 'b32d5d2b-f762-426f-9bbd-ec15c879e1a5',
                name: 'UI Element Styling for Product Page',
                priority: 'Low',
                progress: 'Pending',
            },
        ],
    }

    useEffect(() => {
        // Mimicking the behavior of onSuccess callback for tasks data
        updateOrdered(Object.keys(staticTasks))
        updateGroups(staticTasks)

        // Mimicking the behavior of onSuccess callback for members data
        updateBoardMembers(staticMembers.participantMembers)
        updateAllMembers(staticMembers.allMembers)
    }, [])
    return (
        <AdaptiveCard>
            <TasksHeader />
            <div className="my-8">
                <TaskList />
            </div>
        </AdaptiveCard>
    )
}

export default Tasks
