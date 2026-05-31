import { House, Calendar, Activity, ChartColumn } from 'lucide-react'

export const NAV_LINKS = [
  { id: 'home', href: '/home', icon: House, key: 'nav.home' },
  { id: 'calendar', href: '/schedule', icon: Calendar, key: 'nav.calendar' },
  { id: 'lifestyle', href: '/lifeStyle', icon: Activity, key: 'nav.lifestyle' },
  { id: 'metrics', href: '/dailyReports', icon: ChartColumn, key: 'nav.metrics' },
]

export const NAV_ROUTES = Object.fromEntries(NAV_LINKS.map((l) => [l.id, l.href])) as Record<
  (typeof NAV_LINKS)[number]['id'],
  string
>
