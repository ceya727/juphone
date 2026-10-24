import StatusBar from './StatusBar'

export default function PhoneFrame({ children }) {
  return (
    <main className="simulator-stage">
      <section className="phone-frame" aria-label="iPhone simulator">
        <div className="phone-screen">
          <StatusBar />
          <div className="route-viewport">{children}</div>
          <div className="home-indicator" aria-hidden="true" />
        </div>
      </section>
    </main>
  )
}
