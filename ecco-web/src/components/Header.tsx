export function Header() {
  return (
    <header className=" bg-white py-4 border-b mb-6">
      <div className="mx-auto max-w-4xl flex justify-between items-center pl-4 pr-4">
        <h1>ecco</h1>
        <nav className="flex justify-between gap-4">
          <a href="">home</a>
          <a href="">services</a>
          <a href="">about</a>
          <a href="">contact</a>
        </nav>
      </div>
    </header>
  )
}
