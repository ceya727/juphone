import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBolt, FaCamera, FaChevronUp } from 'react-icons/fa6'

export default function LockScreen() {
  const navigate = useNavigate()
  const pointerStart = useRef(null)
  const unlock = () => navigate('/home')

  return (
    <div
      className="wallpaper lock-screen"
      onClick={unlock}
      onPointerDown={(event) => { pointerStart.current = event.clientY }}
      onPointerUp={(event) => {
        if (pointerStart.current && pointerStart.current - event.clientY > 45) unlock()
        pointerStart.current = null
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && unlock()}
      aria-label="点击或向上滑动解锁"
    >
      <div className="lock-date">Saturday, October 24</div>
      <div className="lock-time">9:41</div>
      <div className="lock-actions">
        <span><FaBolt /></span><span><FaCamera /></span>
      </div>
      <div className="unlock-hint"><FaChevronUp /><span>Swipe up to open</span></div>
    </div>
  )
}
