// make the date auto update in the home page date in ptbr format

import { useEffect, useState } from "react"

export function Home() {
  const [date, setDate] = useState(new Date().toLocaleDateString())
  const [hours, setHours] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().toLocaleTimeString())
      setDate(new Date().toLocaleDateString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="p-6">
      <article className="mx-auto max-w-8xl bg-zinc-100 dark:bg-zinc-700 dark:border-zinc-800 p-4 rounded-md border space-y-5">
        <section className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Home</h1>
            <p>
              Welcome to the home page. This is a simple page that doesn't do much.
            </p>
          </div>
          <div>
            <p>Date: {date} - {hours}</p>
          </div>
        </section>
        <section className="grid gap-4 grid-cols-1 sm:grid-cols-4">
          <section className="bg-zinc-100 dark:bg-zinc-700 dark:border-zinc-800 p-4 rounded-md border">
            <h2>Orders</h2>
            <p>100</p>
          </section>
          <section className="bg-zinc-100 dark:bg-zinc-700 dark:border-zinc-800 p-4 rounded-md border">
            <h2>Billing</h2>
            <p>R$ 5.000,00</p>
          </section>
          <section className="bg-zinc-100 dark:bg-zinc-700 dark:border-zinc-800 p-4 rounded-md border">
            <h2>Reports</h2>
            <p>2</p>
          </section>
          <section className="bg-zinc-100 dark:bg-zinc-700 dark:border-zinc-800 p-4 rounded-md border">
            <h2>Users</h2>
            <p>3</p>
          </section>
        </section>
      </article>
    </main>
  )
}
