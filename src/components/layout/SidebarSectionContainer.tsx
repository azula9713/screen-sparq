import React from 'react'

type Props = {
  children: React.ReactNode
  position?: 'start' | 'end' | 'center'
  isBottomBorderEnabled?: boolean
  isVisible?: boolean
}

export default function SidebarSectionContainer({
  children,
  position = 'start',
  isBottomBorderEnabled = true,
  isVisible = true,
}: Readonly<Props>) {
  return (
    <div
      className={`w-full h-full flex-col items-end px-4 pb-2 my-2 
      ${
        position === 'start'
          ? 'justify-start'
          : position === 'end'
            ? 'justify-end'
            : 'justify-center'
      } ${isVisible ? 'flex' : 'hidden'}`}
    >
      <div
        className={`w-full h-full pb-2 ${
          isBottomBorderEnabled && 'border-b border-gray-200 dark:border-gray-700'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
