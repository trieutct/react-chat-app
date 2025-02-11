import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";

const ChatContainer = () => {
    const { messages, getMessages, isMessagesLoading, selectdUser } =
        useChatStore();

    useEffect(() => {
        getMessages(selectdUser?._id);
    }, [selectdUser?._id, getMessages]);

    if (isMessagesLoading) {
        return (
            <div className="flex-1 flex flex-col overflow-auto">
                <ChatHeader />
                <MessageSkeleton />
                <MessageInput />
            </div>
        );
    }
    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <ChatHeader />

            <p>messages....</p>

            <MessageInput />
        </div>
    );
};

export default ChatContainer;
