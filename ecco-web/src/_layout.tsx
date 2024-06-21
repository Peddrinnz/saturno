import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export function Layout() {
  return (
    <main className='flex flex-col h-full w-full bg-zinc-100 text-zinc-900 antialiased'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}
