type Props = {
  label: string
  reference?: React.Ref<HTMLInputElement>
  id?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'
  error?: string
}

export default function TextBox({ label, reference, id, type = 'text', error }: Readonly<Props>) {
  return (
    <div className='flex flex-col'>
      <label className='text-sm text-gray-600 dark:text-gray-400' htmlFor={id}>
        {label}
      </label>
      <input
        className='border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 my-1 focus:outline-none focus:border-primary dark:focus:border-primary dark:bg-gray-700 dark:text-gray-100 md:min-w-[380px]'
        type={type}
        id={id}
        ref={reference}
      />
      {error && <span className='text-red-500 text-sm'>{error}</span>}
    </div>
  )
}
