export function SignIn() {
  return (
    <main className="flex-1 bg-blue-500 flex flex-col justify-center items-center">
      <div className="grid col-auto max-w-xl bg-zinc-100 p-4 rounded-md border">
        <h1>Sign In</h1>
        <form className="grid ">
          <label>
            Email
            <input type="email" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <label>
            Email
            <input type="email" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </main>
  )
}
