import { FaCommentDots, FaGear, FaMagnifyingGlass } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import { chats } from '../data/chats'

export default function KakaoTalk() {
  const navigate = useNavigate()
  return (
    <div className="app-page kakao-list-page">
      <AppHeader title="Chats" trailing={<FaGear />} />
      <div className="search-field"><FaMagnifyingGlass /><span>Search chats</span></div>
      <div className="chat-list">
        {chats.map((chat) => (
          <button key={chat.id} className="chat-row" onClick={() => navigate(`/kakaotalk/${chat.id}`)}>
            <span className="chat-avatar"><FaCommentDots /></span>
            <span className="chat-copy"><strong>{chat.name}</strong><small>{chat.preview}</small></span>
            <span className="chat-meta"><small>{chat.time}</small>{chat.unread > 0 && <b>{chat.unread}</b>}</span>
          </button>
        ))}
      </div>
      <nav className="kakao-tabs"><span>Friends</span><strong>Chats</strong><span>Open Chat</span><span>More</span></nav>
    </div>
  )
}
