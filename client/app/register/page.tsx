"use client"
import React, { useState } from "react"

function page() {
    const [details, setDetails] = useState()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className="flex min-h-screen">
            <div className="w-1/2">OPEN Router</div>

            <div className="flex w-1/2 items-center justify-center bg-amber-100">
                <form onSubmit={handleLogin} className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="font-bold text-2xl">Register Account</h1>
                    <input type="text" placeholder="Enter Email" className="border-gray-600 border-2 p-2 rounded w-80" />
                    <input type="password" placeholder="Enter Your Password" className="border-gray-600 border-2 p-2 rounded w-80" />
                    <input type="password" placeholder="Enter Confirm Password" className="border-gray-600 border-2 p-2 rounded w-80" />
                    <input type="submit" className="p-2 bg-blue-800 text-white rounded w-72" />
                </form>
            </div>
        </div>
    )
}

export default page