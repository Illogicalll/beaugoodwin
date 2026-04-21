import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import type { ViewId } from '../types'

const VALID_VIEWS: ViewId[] = ['home', 'portfolio', 'work', 'about', 'contact']
const STORAGE_KEY = 'bg-view'

function getSavedView(): ViewId {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && VALID_VIEWS.includes(saved as ViewId)) return saved as ViewId
  } catch {}
  return 'home'
}

interface NavContextValue {
  view: ViewId
  menuOpen: boolean
  navigate: (id: ViewId) => void
  toggleMenu: () => void
  closeMenu: () => void
}

const NavContext = createContext<NavContextValue | null>(null)

export function NavProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<ViewId>(getSavedView)
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useCallback((next: ViewId) => {
    setView(next)
    setMenuOpen(false)
    try { localStorage.setItem(STORAGE_KEY, next) } catch {}
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const toggleMenu = useCallback(() => setMenuOpen(o => !o), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: MouseEvent) => {
      const target = e.target as Element
      if (!target.closest('.sheet') && !target.closest('.menu-btn')) closeMenu()
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [menuOpen, closeMenu])

  return (
    <NavContext.Provider value={{ view, menuOpen, navigate, toggleMenu, closeMenu }}>
      {children}
    </NavContext.Provider>
  )
}

export function useNav() {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error('useNav must be used within NavProvider')
  return ctx
}
