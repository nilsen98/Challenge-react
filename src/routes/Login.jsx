import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useLocation } from "wouter";

export const Login = () => {
    const [_, navigate] = useLocation()
    const { functions } = useContext(GlobalContext)

    const onSubmit = (event) => {
        event.preventDefault()
        functions.initSession(event.target.username.value)
        navigate('/chat')
    }

    return <main className="h-screen w-screen bg-indigo-500 grid place-items-center">
        <div className="bg-white rounded p-8 shadow">
            <p className="text-xl mb-5">Login</p>
            <form onSubmit={onSubmit} className="flex flex-col gap-3">
                <label htmlFor="username">Username</label>
                <input id="username" name="username" type="text" className="border rounded px-4" />
                <button className="bg-indigo-500 text-white rounded py-1 px-4">Submit</button>
            </form>
        </div>
    </main>
}