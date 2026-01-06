import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Sparkles } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - redirect to dashboard
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex bg-white dark:bg-slate-950">
      {/* Left Side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-indigo-100 dark:from-indigo-950/30 via-purple-50 dark:via-purple-950/20 to-white dark:to-slate-950">
        <div className="absolute inset-0 bg-[url('/modern-business-export-shipping-containers.jpg')] bg-cover bg-center opacity-40 dark:opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-white/50 dark:via-slate-950/50 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end p-12 text-balance">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">ExportAuto</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            Scale Your Export Business
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-md leading-relaxed">
            Automate your social media branding with AI-powered content generation. Reach global markets effortlessly.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white dark:bg-slate-950">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 lg:hidden">
              <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">ExportAuto</span>
            </div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Welcome Back</h2>
            <p className="text-gray-600 dark:text-slate-400">Sign in to your admin account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="admin@exportauto.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full h-11 text-base font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 dark:text-slate-400">
            Admin access only. Contact your system administrator.
          </p>
        </div>
      </div>
    </div>
  )
}
