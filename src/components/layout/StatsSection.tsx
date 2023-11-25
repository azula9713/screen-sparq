import SidebarSectionContainer from './SidebarSectionContainer'

type Props = {
  isVisible: boolean
}

export default function StatsSection({ isVisible }: Readonly<Props>) {
  return (
    <SidebarSectionContainer position='start' isVisible={isVisible}>
      {/* followers and following count, complements count */}
      <div className='flex items-center justify-start w-full px-3 lg:px-4'>
        <div className='flex flex-col items-end justify-center w-1/2'>
          <p className='text-center text-gray-500 dark:text-gray-400'>Followers</p>
          <p className='text-center text-gray-800 dark:text-gray-200 font-bold'>0</p>
        </div>
        <div className='flex flex-col items-end justify-center w-1/2'>
          <p className='text-center text-gray-500 dark:text-gray-400'>Following</p>
          <p className='text-center text-gray-800 dark:text-gray-200 font-bold'>0</p>
        </div>
      </div>
      <div className='flex items-center justify-start w-full px-3 lg:px-4'>
        <div className='flex flex-col items-end justify-center w-1/2'>
          <p className='text-center text-gray-500 dark:text-gray-400'>Complements</p>
          <p className='text-center text-gray-800 dark:text-gray-200 font-bold'>0</p>
        </div>
        <div className='flex flex-col items-end justify-center w-1/2'>
          <p className='text-center text-gray-500 dark:text-gray-400'>Collections</p>
          <p className='text-center text-gray-800 dark:text-gray-200 font-bold'>0</p>
        </div>
      </div>
    </SidebarSectionContainer>
  )
}
