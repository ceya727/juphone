import { homeApps, dockApps } from '../data/apps'
import AppIcon from '../components/home/AppIcon'

export default function HomeScreen() {
  return (
    <div className="wallpaper home-screen">
      <section className="widgets" aria-label="Widgets">
        <article className="widget-card">
          <span className="widget-eyebrow">SATURDAY</span>
          <strong>24</strong>
          <span>October</span>
        </article>
        <article className="widget-card weather-widget">
          <strong>24°</strong>
          <span>Mostly Cloudy</span>
        </article>
      </section>
      <section className="app-grid" aria-label="Apps">
        {homeApps.map((app) => <AppIcon key={app.id} app={app} />)}
      </section>
      <div className="page-dots" aria-hidden="true"><span /><span /></div>
      <nav className="dock" aria-label="Dock">
        {dockApps.map((app) => <AppIcon key={app.id} app={app} dock />)}
      </nav>
    </div>
  )
}
