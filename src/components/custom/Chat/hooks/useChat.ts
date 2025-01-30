// import { useChatStore } from '../store/chatStore'
// import { apiGetChats } from '@/services/ChatService'
// import useSWRMutation from 'swr/mutation'
// import type { GetChatsResponse } from '../types'

// async function getChats() {
//     const data = await apiGetChats<GetChatsResponse>()
//     return data
// }

// const useChat = () => {
//     const setChats = useChatStore((state) => state.setChats)
//     const setChatsFetched = useChatStore((state) => state.setChatsFetched)

//     const { trigger: fetchChats, isMutating: isChatsFetching } = useSWRMutation(
//         `/api/chats/`,
//         getChats,
//         {
//             onSuccess: (list) => {
//                 setChats(list)
//                 setChatsFetched(true)
//             },
//         },
//     )

//     return {
//         fetchChats,
//         isChatsFetching,
//     }
// }

// export default useChat

import { useChatStore } from '../store/chatStore'
import type { GetChatsResponse, Chat } from '../types'

// Mock data
const mockChats: Chat[] = [
    {
        id: '1',
        userId: 'user1',
        groupId: null,
        avatar: 'https://via.placeholder.com/150',
        name: 'John Doe',
        muted: false,
        chatType: 'personal',
        lastConversation: 'Hey, how are you?',
        time: 1633072800, // Unix timestamp
        unread: 2,
    },
    {
        id: '2',
        userId: 'user2',
        groupId: null,
        avatar: 'https://via.placeholder.com/150',
        name: 'Jane Smith',
        muted: true,
        chatType: 'personal',
        lastConversation: 'See you later!',
        time: 1633159200, // Unix timestamp
        unread: 0,
    },
    {
        id: '3',
        userId: null,
        groupId: 'group1',
        avatar: 'https://via.placeholder.com/150',
        name: 'Team Chat',
        muted: false,
        chatType: 'groups',
        lastConversation: 'Let’s meet at 10 AM.',
        time: 1633245600, // Unix timestamp
        unread: 5,
    },
]

const useChat = () => {
    const setChats = useChatStore((state) => state.setChats)
    const setChatsFetched = useChatStore((state) => state.setChatsFetched)

    // Mock fetchChats function
    const fetchChats = async () => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Set mock data
        setChats(mockChats)
        setChatsFetched(true)
    }

    return {
        fetchChats,
        isChatsFetching: false, // Mock loading state
    }
}

export default useChat
