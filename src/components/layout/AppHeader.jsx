import { FaChevronLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export default function AppHeader({ title, subtitle, trailing, className = '' }) {
  const navigate = useNavigate()
  const goBack = () => {
    if (window.history.length > 1) navigate(-1)
    else navigate('/home')
  }

  return (
    <header className={`app-header ${className}`}>
      <button className="back-button" onClick={goBack} aria-label="返回">
        <FaChevronLeft />
      </button>
      <div className="header-title-wrap">
        <h1>{title}</h1>
        {subtitle && <span>{subtitle}</span>}
      </div>
      <div className="header-trailing">{trailing}</div>
    </header>
  )
}
