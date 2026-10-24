import { Navigate, Route, Routes } from 'react-router-dom'
import PhoneFrame from './components/layout/PhoneFrame'
import LockScreen from './pages/LockScreen'
import HomeScreen from './pages/HomeScreen'
import KakaoTalk from './pages/KakaoTalk'
import ChatRoom from './pages/ChatRoom'
import PlaceholderPage from './pages/PlaceholderPage'
import { placeholderPages } from './data/pages'

export default function App() {
  return (
    <PhoneFrame>
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/kakaotalk" element={<KakaoTalk />} />
        <Route path="/kakaotalk/:id" element={<ChatRoom />} />
        {placeholderPages.map((page) => (
          <Route key={page.path} path={page.path} element={<PlaceholderPage page={page} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PhoneFrame>
  )
}
