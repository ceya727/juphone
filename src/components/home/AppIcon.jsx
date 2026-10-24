import { useNavigate } from 'react-router-dom'

export default function AppIcon({ app, dock = false }) {
  const navigate = useNavigate()
  const Icon = app.icon
  const activate = () => app.path && navigate(app.path)

  return (
    <button className={`app-shortcut ${dock ? 'dock-shortcut' : ''}`} onClick={activate} disabled={!app.path} aria-label={app.label}>
      <span className="app-icon" style={{ backgroundColor: app.color, color: app.iconColor }}>
        <Icon />
      </span>
      {!dock && <span className="app-label">{app.label}</span>}
    </button>
  )
}
