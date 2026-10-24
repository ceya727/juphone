import { FaBatteryFull, FaSignal, FaWifi } from 'react-icons/fa6'

export default function StatusBar() {
  return (
    <header className="status-bar" aria-label="Phone status">
      <span className="status-time">9:41</span>
      <div className="dynamic-island" aria-hidden="true" />
      <div className="status-icons" aria-hidden="true">
        <FaSignal /><FaWifi /><FaBatteryFull className="battery" />
      </div>
    </header>
  )
}
