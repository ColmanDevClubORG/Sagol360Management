import { House, Calendar, Activity, ChartColumn } from 'lucide-react'

export const NAV_LINKS = [
  { id: 'home', href: '/home', icon: House, key: 'nav.home' },
  { id: 'calendar', href: '/schedule', icon: Calendar, key: 'nav.calendar' },
  { id: 'lifestyle', href: '/lifeStyle', icon: Activity, key: 'nav.lifestyle' },
  { id: 'metrics', href: '/dailyReports', icon: ChartColumn, key: 'nav.metrics' },
]
