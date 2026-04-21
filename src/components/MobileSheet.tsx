import { useNav } from '../context/nav'
import { NAV_ITEMS } from '../data'

export default function MobileSheet() {
  const { view, menuOpen, navigate } = useNav()

  return (
    <div className="sheet" aria-hidden={!menuOpen}>
      <div className="relative z-10 flex flex-col">
        <nav className="flex flex-col" aria-label="Mobile">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href="#"
              className={`sheet-link${view === item.id ? ' active' : ''}`}
              onClick={e => { e.preventDefault(); navigate(item.id) }}
            >
              <span className="font-mono text-[10px] text-[var(--color-muted)] tracking-[0.04em] min-w-[22px]">
                {item.idx}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
