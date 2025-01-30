// export interface Comment {
//     id: string
//     name: string
//     src: string
//     message: string
//     date: number
// }

// export type Member = {
//     id: string
//     name: string
//     email: string
//     img: string
// }

// export type Ticket = {
//     id: string
//     name: string
//     description: string
//     cover: string
//     members?: Member[]
//     labels?: string[]
//     attachments?: {
//         id: string
//         name: string
//         src: string
//         size: string
//     }[]
//     comments?: Comment[]
//     dueDate: string | null
// }

// export type Task = {
//     id: string
//     name: string
//     description: string
//     dueDate?: string
// }

// export type Column = {
//     id: string
//     title: string
//     tasks: Ticket[]
// }

// export type Columns = Column[]

// export type GetScrumBoardsResponse = Record<string, Ticket[]>

// export type GetProjectMembersResponse = {
//     participantMembers: Member[]
//     allMembers: Member[]
// }

export interface Comment {
    id: string
    name: string
    src: string
    message: string
    date: number
}

export type Member = {
    id: string
    name: string
    email: string
    img: string
}

export type Ticket = {
    id: string
    name: string
    description: string
    cover: string
    members?: Member[]
    labels?: string[]
    attachments?: {
        id: string
        name: string
        src: string
        size: string
    }[]
    comments?: Comment[]
    dueDate: string | null
}

export type Task = {
    id: string
    name: string
    description: string
    dueDate?: string
}

export type Column = {
    id: string
    title: string
    tasks: Ticket[]
}

export type Columns = Column[]

export type GetScrumBoardsResponse = Record<string, Ticket[]>

export type GetProjectMembersResponse = {
    participantMembers: Member[]
    allMembers: Member[]
}

interface BoardColumnProps {
    title: string
    tasks: Ticket[]
    dragHandleProps?: any
}
