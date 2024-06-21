import { Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <main className="h-screen flex flex-col">
      <div className="flex h-full">  <section className="w-64 bg-white border-r-2 dark:bg-zinc-800 dark:border-r-zinc-700 overflow-y-auto p-4">
        <section className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-md border dark:border-zinc-800 resize">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-xs">
            Welcome to the dashboard. This is a simple page that doesn't do much.
          </p>
        </section>
        <section className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-md border dark:border-zinc-800">
          <a href="/app">Home</a>
        </section>
        <section className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-md border dark:border-zinc-800">
          <a href="/" target="_blank" rel="noopener noreferrer">Stores</a>
        </section>
        <section className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-md border dark:border-zinc-800">
          <a href="/app/users">Users</a>
        </section>
      </section>
        <div className="flex-grow overflow-y-auto p-4">  <Outlet />
        </div>
      </div>
    </main>

  )
}
