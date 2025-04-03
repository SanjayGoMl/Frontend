import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import { Canvas } from '@/pages/Canvas'

// import { History } from '@/pages/History'
import { AppSkeleton, NotFound } from '@/components'
import { Path } from '@/utils/types'

export const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path={Path.HOME} element={<AppSkeleton />}>
          <Route path={Path.CANVAS} element={<Canvas />} />
          {/* <Route path={Path.HISTORY} element={<History />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}
