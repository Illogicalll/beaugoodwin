import { useNav } from '../context/nav'
import { NAV_ITEMS } from '../data'
import MobileSheet from './MobileSheet'

export default function Overlay() {
  const { view, menuOpen, navigate, toggleMenu } = useNav()

  return (
    <div className="chrome">
      <div className="[grid-column:1/2] [grid-row:1/2] hidden md:flex items-center font-medium text-[15px] tracking-[-0.01em]">
        Beau Goodwin
      </div>

      <nav className="nav-desktop [grid-column:1/2] [grid-row:3/4] self-end flex flex-col gap-0.5 text-[15px] tracking-[-0.005em]" aria-label="Primary">
        {NAV_ITEMS.map(item => (
          <a
            key={item.id}
            href="#"
            className={`nav-link${view === item.id ? ' active' : ''}`}
            onClick={e => { e.preventDefault(); navigate(item.id) }}
          >
            <span className={`nav-idx font-mono text-[10px] min-w-[22px] translate-y-[-1px] transition-colors ${view === item.id ? 'text-[var(--color-fg)]' : 'text-[var(--color-muted)]'}`}>
              {item.idx}
            </span>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </nav>

      <button
        className="menu-btn"
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span className="btn-label font-medium text-[15px]">BG</span>
        <span className="btn-close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1 L13 13 M13 1 L1 13" />
          </svg>
        </span>
      </button>

      <div className="[grid-column:2/3] [grid-row:3/4] justify-self-end self-end font-mono text-[11px] tracking-[0.04em] uppercase text-[var(--color-muted)]">
        © MMXXVI
      </div>

      <MobileSheet />
    </div>
  )
}
