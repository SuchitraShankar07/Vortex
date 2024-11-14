'use client'

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, User, Users, Boxes } from "lucide-react"
import './Home.css'

function Login({ loginType }) {
  return (
    <Card className="w-full max-w-md bg-black/10 backdrop-blur-sm border-none shadow-2xl">
      <CardHeader>
        <CardTitle className="text-white">{loginType} Login</CardTitle>
        <CardDescription className="text-white/80">Enter your credentials to dive in.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Add your login form here */}
        <p className="text-white/90">Login form for {loginType}</p>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginType, setLoginType] = useState("User")

  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem("loginStatus")
      setIsLoggedIn(loginStatus === "true")
    }

    checkLoginStatus()
    const interval = setInterval(checkLoginStatus, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#2D1B69]">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <Boxes className="w-8 h-8 text-white" />
          <h1 className="text-4xl font-bold text-white">Vortex</h1>
        </motion.div>
      </div>

      {isLoggedIn ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 bg-gradient-to-br from-[#2D1B69] via-[#FF626B] to-[#FF9D80] p-8 flex items-center justify-center"
        >
          <Card className="w-full max-w-md bg-black/10 backdrop-blur-md border-none shadow-2xl">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-white text-center">Welcome</CardTitle>
              <CardDescription className="text-xl text-white/80 text-center">
                Your journey begins here
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center text-white">
              <p className="mb-4">Explore your personalized event space</p>
              <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all shadow-lg">
                Get Started <ArrowRight className="inline ml-2" />
              </button>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <div className="flex-1 flex pt-24">
          {/* User Side */}
          <motion.div
            className="flex-1 relative cursor-pointer transition-all duration-500 flex items-center justify-center overflow-hidden"
            onClick={() => setLoginType("User")}
            animate={{
              flex: loginType === "User" ? 2 : 1,
            }}
          >
            <div className={`absolute inset-0 transition-opacity duration-500
              ${loginType === "User" ? "opacity-100" : "opacity-50"}
              bg-gradient-to-br from-[#2D1B69] via-[#9300f6] to-[#FF9D80]`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                opacity: loginType === "User" ? 0.2 : 0.1,
                scale: loginType === "User" ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <User className="w-32 h-32 text-white" />
            </motion.div>
            <AnimatePresence mode="wait">
              {loginType === "User" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative z-10"
                >
                  <Login loginType="User" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Club Side */}
          <motion.div
            className="flex-1 relative cursor-pointer transition-all duration-500 flex items-center justify-center overflow-hidden"
            onClick={() => setLoginType("Club")}
            animate={{
              flex: loginType === "Club" ? 2 : 1,
            }}
          >
            <div className={`absolute inset-0 transition-opacity duration-500
              ${loginType === "Club" ? "opacity-100" : "opacity-50"}
              bg-gradient-to-br from-[#00FFE5] to-[#2573F2]`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                opacity: loginType === "Club" ? 0.2 : 0.1,
                scale: loginType === "Club" ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <Users className="w-32 h-32 text-white" />
            </motion.div>
            <AnimatePresence mode="wait">
              {loginType === "Club" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative z-10"
                >
                  <Login loginType="Club" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF626B] rounded-full filter blur-[128px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00FFE5] rounded-full filter blur-[128px] opacity-20" />
      </div>
    </div>
  )
}