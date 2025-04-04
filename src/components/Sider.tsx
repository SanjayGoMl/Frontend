import { useLocation } from 'react-router-dom'
import { Path } from '../utils/types'
import {
  PresentationChartBarIcon,
} from '@heroicons/react/24/outline'
import { classNames } from '@/utils/fn'
import logo from '../assets/goml.png'

export const Sider = () => {
  const location = useLocation()

  return (
    <aside
      className="w-64 h-[95vh] p-2 flex flex-col justify-between items-center"
      aria-label="Sidebar"
    >
      <div className='pt-7'>
      <img
        src={logo}
        width={80}
      />
      </div>
     
      <ul className="mt-2 space-y-1 w-full h-5/6">
        {[
          {
            name: 'Canvas',
            link: Path.CANVAS,
            icon: <PresentationChartBarIcon className="w-6 h-6 mr-2" />,
          },
          // {
          //   name: 'History',
          //   link: Path.HISTORY,
          //   icon: <CircleStackIcon className="w-6 h-6 mr-2" />,
          // },
        ].map((item) => (
          <li key={item.link}>
            <a
              href={item.link}
              className={classNames(
                'flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-100',
                location.pathname === item.link
                  ? 'rounded-lg text-white hover:text-slate-200 bg-gradient-to-r from-cyan-600 to-purple-600'
                  : 'text-slate-500 hover:text-slate-700'
              )}
            >
              {item.icon}
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {/* <div className="px-4 py-2 rounded-md bg-slate-100 w-[85%] flex justify-between items-center">
        <div className="w-4 h-4 p-4 flex items-center justify-center rounded-md border-2 bg-blue-600">
          <p className="text-sm text-white">UJ</p>
        </div>
        <span className="block">
          <p className="text-sm font-medium">Usman Jaiswal</p>
          <p className="text-xs font-medium text-slate-500">Free Plan</p>
        </span>
      </div> */}
    </aside>
  )
}
