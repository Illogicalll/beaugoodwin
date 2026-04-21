export type ViewId = 'home' | 'portfolio' | 'work' | 'about' | 'contact'

export interface NavItem {
  id: ViewId
  label: string
  idx: string
}

export interface Article {
  n: string
  title: string
  desc: string
  tag: string
  year: string
  v: '' | 'v2' | 'v3' | 'v4'
}
