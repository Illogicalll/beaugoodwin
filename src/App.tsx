import { NavProvider, useNav } from './context/nav'
import Overlay from './components/Overlay'
import HomeView from './views/HomeView'
import PortfolioView from './views/PortfolioView'
import WorkView from './views/WorkView'
import AboutView from './views/AboutView'
import ContactView from './views/ContactView'

function AppInner() {
  const { view, menuOpen } = useNav()

  return (
    <div className={menuOpen ? 'menu-open' : ''}>
      <Overlay />
      <main className="min-h-screen relative">
        <div className={view === 'home'      ? 'block view-active' : 'hidden'}><HomeView /></div>
        <div className={view === 'portfolio' ? 'block view-active' : 'hidden'}><PortfolioView /></div>
        <div className={view === 'work'      ? 'block view-active' : 'hidden'}><WorkView /></div>
        <div className={view === 'about'     ? 'block view-active' : 'hidden'}><AboutView /></div>
        <div className={view === 'contact'   ? 'block view-active' : 'hidden'}><ContactView /></div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <NavProvider>
      <AppInner />
    </NavProvider>
  )
}
