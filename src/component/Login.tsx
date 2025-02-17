
export default function Login() {
  return (
    <form  className="flex flex-col border-2 w-fit p-6 m-auto">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" className="border-2 w-fit" />
    <label htmlFor="password">Password</label>
    <input type="password" name="password" className="border-2 w-fit" />
    </form>
  )
}
