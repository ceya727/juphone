import AppHeader from '../components/layout/AppHeader'

export default function PlaceholderPage({ page }) {
  return (
    <div className="app-page placeholder-page">
      <AppHeader title={page.title} />
      <div className="placeholder-content"><div /><h2>{page.title}</h2><p>{page.description}</p></div>
    </div>
  )
}
