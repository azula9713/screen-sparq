import React from 'react'

type Props = {
  label: string
  action: () => void
  reference?: React.Ref<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ label, action, reference, type = 'button' }: Readonly<Props>) {
  return (
    <button
      className='bg-primary hover:bg-secondary dark:text-white font-bold py-2 px-4 rounded mt-4 w-full'
      type={type}
      onClick={action}
      ref={reference}
    >
      {label}
    </button>
  )
}
