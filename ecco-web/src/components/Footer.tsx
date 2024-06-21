import { useState, useEffect } from "react"

export function Footer() {
  const [year, setYear] = useState('')
  // format the year in ptbr
  useEffect(() => {
    const date = new Date()
    setYear(date.getFullYear().toString())
  }, [])

  return (
    <footer className="bg-white py-4 border-t mt-6">
      <div className="mx-auto max-w-4xl flex justify-between items-center">
        <h2>ECCO Services</h2>
        <p>© {year} - CARBON CYCLE LTDA. All rights reserved.</p>
      </div>
    </footer>
  )
}
