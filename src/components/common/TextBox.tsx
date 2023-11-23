type Props = {
  label: string
  reference?: React.Ref<HTMLInputElement>
  placeholder?: string
  id?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'
  error?: string
  labelVisible?: boolean
}

export default function TextBox({
  label,
  reference,
  placeholder,
  id,
  error,
  type = 'text',
  labelVisible = true,
}: Readonly<Props>) {
  return (
    <div className='flex flex-col'>
      {labelVisible && (
        <label className='text-sm text-gray-600 dark:text-gray-400' htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className='border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 my-1 focus:outline-none focus:border-primary dark:focus:border-primary dark:bg-gray-700 dark:text-gray-100 md:min-w-[380px]'
        type={type}
        id={id}
        ref={reference}
        placeholder={placeholder}
      />
      {error && <span className='text-red-500 text-sm'>{error}</span>}
    </div>
  )
}
