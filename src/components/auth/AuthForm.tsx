'use client'

import { signIn } from 'next-auth/react'
import { useRef } from 'react'

import Button from '../common/Button'
import TextBox from '../common/TextBox'

type Props = {
  type: 'signin' | 'signup'
}

export default function AuthForm({ type }: Readonly<Props>) {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    console.log(email, password)
  }

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000' })
  }

  const handleGithubSignIn = () => {
    signIn('github', { callbackUrl: 'http://localhost:3000' })
  }

  return (
    <div className='flex flex-col justify-center items-center bg-white dark:bg-gray-800 dark:text-gray-100'>
      <form className='flex flex-col items-center justify-center mt-4' onSubmit={handleSubmit}>
        <TextBox label='Email' id='email' type='email' reference={emailRef} />
        <TextBox label='Password' id='password' type='password' reference={passwordRef} />
        <button
          className='bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded mt-4 w-full'
          type='submit'
        >
          {type === 'signin' ? 'Sign In' : 'Sign Up'}
        </button>

        {/* add google and github sign in methods from next auth */}
        <Button label='Sign In with Google' action={handleGoogleSignIn} />
        <Button label='Sign In with Github' action={handleGithubSignIn} />
      </form>
      {type === 'signin' ? (
        <div className='mt-4'>
          <span className='text-gray-600 dark:text-gray-400'>Don&apos;t have an account?</span>
          <a className='text-blue-500 hover:text-blue-700' href='/signup'>
            Sign Up
          </a>
        </div>
      ) : (
        <div className='mt-4'>
          <span className='text-gray-600 dark:text-gray-400'>Already have an account? &nbsp;</span>
          <a className='text-blue-500 hover:text-blue-700' href='/signin'>
            Sign In
          </a>
        </div>
      )}
    </div>
  )
}
