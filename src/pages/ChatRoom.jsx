import { useParams } from 'react-router-dom'
import { FaArrowUp, FaPlus } from 'react-icons/fa6'
import AppHeader from '../components/layout/AppHeader'
import { chats } from '../data/chats'

export default function ChatRoom() {
  const { id } = useParams()
  const chat = chats.find((item) => item.id === id)
  return (
    <div className="app-page chat-room-page">
      <AppHeader title={chat?.name ?? 'Chat'} />
      <div className="empty-chat"><span>Conversation content will go here.</span></div>
      <div className="message-composer"><button aria-label="Add"><FaPlus /></button><div>Message</div><button className="send-button" aria-label="Send"><FaArrowUp /></button></div>
    </div>
  )
}
