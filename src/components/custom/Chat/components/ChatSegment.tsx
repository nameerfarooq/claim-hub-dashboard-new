import Segment from '@/components/ui/Segment'
import { TbUserCircle, TbUsers } from 'react-icons/tb'
import { useChatStore } from '../store/chatStore'
import type { ChatType } from '../types'
import { MdOutlineMailOutline, MdOutlineTextsms, MdWhatsapp } from 'react-icons/md'
import { CiStreamOn } from 'react-icons/ci'

const ChatSegment = () => {
    const selectedChatType = useChatStore((state) => state.selectedChatType)
    const setSelectedChatType = useChatStore(
        (state) => state.setSelectedChatType,
    )

    return (
        <div className="bg-gray-100 rounded-lg">
            <Segment
                className="w-[300px] grid grid-cols-2"
                value={selectedChatType}
                onChange={(value) => setSelectedChatType(value as ChatType)}
            >
                <Segment.Item
                    className="min-w-[100px]"
                    activeClassName="bg-white"
                    inactiveClassName=""
                    value="personal"
                >
                    <div className="flex gap-2">
                        <MdOutlineMailOutline className="text-xl" />
                        <span>Email</span>
                    </div>
                </Segment.Item>
                <Segment.Item
                    className="min-w-[100px]"
                    activeClassName="bg-white"
                    inactiveClassName=""
                    value="groups"
                >
                    <div className="flex gap-2">
                        <MdWhatsapp className="text-xl" />
                        <span>WhatsApp</span>
                    </div>
                </Segment.Item>
            {/* </Segment>
            <Segment
                className="w-full justify-between"
                value={selectedChatType}
                onChange={(value) => setSelectedChatType(value as ChatType)}
            > */}
                <Segment.Item
                    className="min-w-[100px]"
                    activeClassName="bg-white"
                    inactiveClassName=""
                    value="SMS"
                >
                    <div className="flex gap-2">
                        <MdOutlineTextsms className="text-xl" />
                        <span>SMS</span>
                    </div>
                </Segment.Item>
                <Segment.Item
                    className="min-w-[100px]"
                    activeClassName="bg-white"
                    inactiveClassName=""
                    value="live"
                >
                    <div className="flex gap-2">
                        <CiStreamOn className="text-xl" />
                        <span className="text-nowrap">Live Chat</span>
                    </div>
                </Segment.Item>
            </Segment>
        </div>
    )
}

export default ChatSegment
