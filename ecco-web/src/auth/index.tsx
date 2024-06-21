import { Outlet } from 'react-router-dom'

export function Auth() {
  return (
    <main className='h-screen flex flex-col'>
      <Outlet />
    </main>
  )
}
