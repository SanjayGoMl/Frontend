import './App.css'
import en from 'javascript-time-ago/locale/en.json'
import TimeAgo from 'javascript-time-ago'

import { AnimatedRoutes } from '@/components'

TimeAgo.addDefaultLocale(en)

function App() {
  return (
    <div className="font-sans">
      <AnimatedRoutes />
    </div>
  )
}

export default App
