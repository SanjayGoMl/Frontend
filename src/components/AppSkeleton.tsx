import { Outlet, useNavigate } from 'react-router-dom'

import { Sider } from '.'
import { AnimatedPage } from '.'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline'
import { Button } from '.'
import { useEffect } from 'react'
import { Path } from '@utils/types'
// import {Chat} from '@pages/Canvas/components/Chat/Chat'

export const AppSkeleton = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const routetoCanvas=()=>  {navigate(Path.CANVAS)}
    routetoCanvas()

  }, [])

  return (
    <div className="h-screen w-screen sm:h-3/5 bg-white dark:bg-slate-800">
      <div className="mx-auto h-full">
        <div className="flex">
          <Sider />
          <div className="w-full p-4 space-y-2 bg-slate-100">
            <div className="w-full bg-white px-4 py-2 rounded-md shadow-lg flex justify-between items-center">
              <p className="text-slate-800 dark:text-slate-200 font-bold text-md">
              Saksoft Bot
              </p>
              <div className="flex justify-between">
                <Button
                  variant="ghost"
                  startIcon={
                    <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
                  }
                >
                  Logout
                </Button>
              </div>
            </div>
            <AnimatedPage>
              <Outlet />
            </AnimatedPage>
          </div>
          {/* <div className="flex-grow flex flex-col justify-end">
            <ChatWrapper />
          </div> */}
        </div>
      </div>
    </div>
    
  )
}
// const ChatWrapper = () => {
//   return (
//     <div className="ml-20 mt-8">
//       <Chat onMessageSend={sendMessage} />
//     </div>
//   );
// }
