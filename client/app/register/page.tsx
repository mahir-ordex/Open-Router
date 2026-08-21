"use client"
import React, { useState } from "react"
import { signUpApi } from "@/api/auth"
import { useRouter } from "next/router"

function page() {
    const [details, setDetails] = useState({
        "first_name":"",
        "last_name":"",
        "email":"",
        "password":"",
        "confirmPassword":""
    })
    const router = useRouter()
    const handleSignUp = () => {
        try {
            if(details.password !== details.confirmPassword){
                return "Password and Confirn Password are mismatched"
            }
            const res = signUpApi(details)
            if(res.status == 200){
                console.log("success")
            }else{
                console.error("wrong!")
            }
        } catch (error) {
            console.error("Something Went Wrong!")
        }
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name,value} = e.target
        setDetails((prev) =>({
            ...prev,
            [name]:value
        }))

    }

    return (
        <div className="flex min-h-screen">
            <div className="w-1/2">OPEN Router</div>

            <div className="flex w-1/2 items-center justify-center bg-amber-100">
                <form onSubmit={() => handleSignUp} className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="font-bold text-2xl">Register Account</h1>
                    <input onChange={handleChange} name="email"type="text" placeholder="Enter Email" className="border-gray-600 border-2 p-2 rounded w-80" />
                    <input onChange={handleChange} name="password" type="password" placeholder="Enter Your Password" className="border-gray-600 border-2 p-2 rounded w-80" />
                    <input onChange={handleChange} name="confirmPassword" type="password" placeholder="Enter Confirm Password" className="border-gray-600 border-2 p-2 rounded w-80" />
                    <input type="submit" className="p-2 bg-blue-800 text-white rounded w-72" />
                </form>
            </div>
        </div>
    )
}

export default page