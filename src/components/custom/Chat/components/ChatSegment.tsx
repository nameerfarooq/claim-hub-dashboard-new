import Segment from '@/components/ui/Segment'
import { TbUserCircle, TbUsers } from 'react-icons/tb'
import { useChatStore } from '../store/chatStore'
import type { ChatType } from '../types'

const ChatSegment = () => {
    const selectedChatType = useChatStore((state) => state.selectedChatType)
    const setSelectedChatType = useChatStore(
        (state) => state.setSelectedChatType,
    )

    return (
        <div className="bg-gray-100 rounded-lg">
            <Segment
                className="w-full"
                value={selectedChatType}
                onChange={(value) => setSelectedChatType(value as ChatType)}
            >
                <Segment.Item
                    className="flex-1"
                    activeClassName="bg-white"
                    inactiveClassName=""
                    value="personal"
                >
                    <div className="flex items-center justify-start gap-2">
                        <TbUserCircle className="text-xl" />
                        <span>Email</span>
                    </div>
                </Segment.Item>
                <Segment.Item
                    className="flex-1"
                    activeClassName="bg-white"
                    inactiveClassName=""
                    value="groups"
                >
                    <div className="flex items-center justify-start gap-2">
                        <TbUsers className="text-xl" />
                        <span>WhatsApp</span>
                    </div>
                </Segment.Item>
            </Segment>
            <Segment
                className="w-full"
                value={selectedChatType}
                onChange={(value) => setSelectedChatType(value as ChatType)}
            >
                <Segment.Item
                    className="flex-1"
                    activeClassName="bg-white"
                    inactiveClassName=""
                    value="SMS"
                >
                    <div className="flex items-center justify-start gap-2">
                        <TbUserCircle className="text-xl" />
                        <span>SMS</span>
                    </div>
                </Segment.Item>
                <Segment.Item
                    className="flex-1"
                    activeClassName="bg-white"
                    inactiveClassName=""
                    value="live"
                >
                    <div className="flex items-center justify-center">
                        <TbUsers className="text-xl" />
                        <span className="text-nowrap">Live Chat</span>
                    </div>
                </Segment.Item>
            </Segment>
        </div>
    )
}

export default ChatSegment
