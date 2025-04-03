import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/24/outline'

import { Sider } from '@/components/Sider'
import { AnimatedPage } from '@/components/AnimatedPage'
import { Path } from '@/utils/types'
import { Button } from '@/components'

export const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(Path.CANVAS)
  }, [])

  return (
    <div className="h-screen w-screen sm:h-3/5 bg-white dark:bg-slate-800">
      <div className="mx-auto h-full">
        <div className="flex">
          <Sider />
          <div className="w-full ">
            <div className="w-[99%] m-2 px-4 py-2 rounded-md shadow-lg flex justify-between items-center">
              <p className="text-slate-800 dark:text-slate-200 font-medium text-md">
                Skasoft Bot
              </p>
              <Button
                variant="ghost"
                startIcon={<TrashIcon className="w-4 h-4" />}
              >
                Clear Conversation
              </Button>
            </div>
            <AnimatedPage>
              <Outlet />
            </AnimatedPage>
          </div>
        </div>
      </div>
    </div>
  )
}
