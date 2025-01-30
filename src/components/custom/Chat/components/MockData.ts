import user from '@/assets/Images/user.png'

// mockData.ts
export const MockData = [
    {
        id: '1',
        userId: 'user1',
        groupId: null,
        avatar: user,
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
        avatar: user,
        name: 'Jane Smith',
        muted: true,
        chatType: 'personal',
        lastConversation: 'See you later!',
        time: 1633159200,
        unread: 0,
    },
    {
        id: '3',
        userId: 'user3',
        groupId: 'group1',
        avatar: user,
        name: 'Team Chat',
        muted: false,
        chatType: 'groups',
        lastConversation: 'I’ll be there, thanks for the reminder!',
        time: 1633245600,
        unread: 2,
    },
    {
        id: '4',
        userId: 'user4',
        groupId: null,
        avatar: user,
        name: 'Alice Johnson',
        muted: false,
        chatType: 'personal',
        lastConversation: 'Are we still meeting tomorrow?',
        time: 1633332000,
        unread: 3,
    },
    {
        id: '5',
        userId: null,
        groupId: 'group2',
        avatar: user,
        name: 'Work Project',
        muted: true,
        chatType: 'groups',
        lastConversation: 'Please submit your reports by EOD.',
        time: 1633418400,
        unread: 1,
    },
    {
        id: '6',
        userId: null,
        groupId: 'group3',
        avatar: user,
        name: 'Marketing Team',
        muted: false,
        chatType: 'groups',
        lastConversation: 'Meeting at 3 PM to discuss new campaign.',
        time: 1633504800,
        unread: 4,
    },
    {
        id: '7',
        userId: null,
        groupId: 'group4',
        avatar: user,
        name: 'Product Development',
        muted: false,
        chatType: 'groups',
        lastConversation: 'Need to finalize the prototype by tomorrow.',
        time: 1633591200,
        unread: 7,
    },
]

export const mockMessage1 = [
    {
        id: 'msg1',
        sender: {
            id: 'user1',
            name: 'John Doe',
            avatarImageUrl: '/avatars/user1.jpg',
        },
        content: 'Hello, how are you?',
        timestamp: 1633072800,
        type: 'regular',
        isMyMessage: false,
    },
    {
        id: 'msg2',
        sender: {
            id: 'user2',
            name: 'Jane Smith',
            avatarImageUrl: '/avatars/user2.jpg',
        },
        content: 'I’m good, how about you?',
        timestamp: 1633076400,
        type: 'regular',
        isMyMessage: true,
    },
]

export const mockMessage2 = [
    {
        id: 'msg3',
        sender: {
            id: 'user3',
            name: 'Alice Johnson',
            avatarImageUrl: '/avatars/user3.jpg',
        },
        content: 'Are we still meeting tomorrow?',
        timestamp: 1633332000,
        type: 'regular',
        isMyMessage: false,
    },
    {
        id: 'msg4',
        sender: {
            id: 'user1',
            name: 'John Doe',
            avatarImageUrl: '/avatars/user1.jpg',
        },
        content: 'Yes, see you at 10 AM.',
        timestamp: 1633335600,
        type: 'regular',
        isMyMessage: true,
    },
]

export const mockMessage3 = [
    {
        id: 'msg5',
        sender: {
            id: 'user1',
            name: 'John Doe',
            avatarImageUrl: '/avatars/user1.jpg',
        },
        content: 'Let’s meet at 10 AM.',
        timestamp: 1633245600,
        type: 'regular',
        isMyMessage: false,
    },
    {
        id: 'msg6',
        sender: {
            id: 'user3',
            name: 'Jane Smith',
            avatarImageUrl: '/avatars/user3.jpg',
        },
        content: 'I’ll be there, thanks for the reminder!',
        timestamp: 1633249200,
        type: 'regular',
        isMyMessage: true,
    },
]

export const mockMessage4 = [
    {
        id: 'msg7',
        sender: {
            id: 'user1',
            name: 'John Doe',
            avatarImageUrl: '/avatars/user1.jpg',
        },
        content: 'Meeting at 3 PM to discuss new campaign.',
        timestamp: 1633504800,
        type: 'regular',
        isMyMessage: false,
    },
    {
        id: 'msg8',
        sender: {
            id: 'user4',
            name: 'Alice Johnson',
            avatarImageUrl: '/avatars/user4.jpg',
        },
        content: 'Got it, I’ll prepare the presentation.',
        timestamp: 1633508400,
        type: 'regular',
        isMyMessage: true,
    },
]

export const mockMessage5 = [
    {
        id: 'msg9',
        sender: {
            id: 'user1',
            name: 'John Doe',
            avatarImageUrl: '/avatars/user1.jpg',
        },
        content: 'Need to finalize the prototype by tomorrow.',
        timestamp: 1633591200,
        type: 'regular',
        isMyMessage: false,
    },
    {
        id: 'msg10',
        sender: {
            id: 'user3',
            name: 'Alice Johnson',
            avatarImageUrl: '/avatars/user3.jpg',
        },
        content: 'I’ll send the finalized version by 6 PM.',
        timestamp: 1633594800,
        type: 'regular',
        isMyMessage: true,
    },
]

export const mockConversation = [
    {
        id: '1',
        conversation: mockMessage1,
    },
    {
        id: '2',
        conversation: mockMessage2,
    },
    {
        id: '3',
        conversation: mockMessage3,
    },
    {
        id: '4',
        conversation: mockMessage4, // Group chat: Marketing Team
    },
    {
        id: '5',
        conversation: mockMessage5, // Group chat: Product Development
    },
]
