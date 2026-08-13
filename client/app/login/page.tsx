"use client"
import Link from "next/link"
import React,{useState,useEffect} from "react"

function page() {
    const [details,setDetails] = useState({
        "email":"",
        "password":""
    })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
    }
  const handleLogin = (e: React.FormEvent) => {

    
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2">OPEN Router</div>

      <div className="flex w-1/2 items-center justify-center bg-amber-100">
        <form onSubmit={handleLogin} className="flex flex-col gap-4 items-center justify-center">
        <h1 className="font-bold text-2xl">Login</h1>
          <input name="email" type="text" onChange={handleChange} placeholder="Enter Email" className="border-gray-600 border-2 p-2 rounded w-80"/>
          <input name="password" type="password" onChange={handleChange} placeholder="Enter Password" className="border-gray-600 border-2 p-2 rounded w-80"/>
          <Link className="pl-52 font-extralight text-sm text-blue-900" href="/register">Create Account?</Link>
          <input type="submit" className="px-2 p-2 text-center bg-blue-800 text-white rounded w-72"/>
        </form>
      </div>
    </div>
  )
}

export default page