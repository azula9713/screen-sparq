import React from 'react'

type Props = {
  actionName: string
  actionIcon: React.ReactNode
  actionFunction: () => void
  isBottomBorderEnabled?: boolean
}

export default function SidebarAction({ actionName, actionIcon, actionFunction }: Readonly<Props>) {
  return (
    <div className='w-full h-auto flex flex-col items-end justify-end p-2'>
      <button
        className='flex items-center justify-end w-full py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800'
        onClick={actionFunction}
      >
        <span className='ml-2 text-sm lg:text-lg font-light text-gray-900 dark:text-gray-200'>
          {actionName}
        </span>
        {actionIcon}
      </button>
    </div>
  )
}
