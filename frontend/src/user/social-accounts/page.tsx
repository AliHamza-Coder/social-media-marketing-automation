

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { useState } from "react"
import { Instagram, Linkedin, Facebook, Twitter, Youtube, Plus, CheckCircle, AlertCircle, Settings } from "lucide-react"
import { cn } from "@/lib/utils"


export default function SocialAccountsPage() {
  const [accounts] = useState([
    {
      platform: "LinkedIn",
      icon: Linkedin,
      color: "rgb(14, 118, 168)",
      connected: true,
      username: "@yourcompany",
      followers: "12.5K",
      status: "Active",
    },
    {
      platform: "Instagram",
      icon: Instagram,
      color: "rgb(225, 48, 108)",
      connected: true,
      username: "@yourcompany",
      followers: "45.2K",
      status: "Active",
    },
    {
      platform: "Facebook",
      icon: Facebook,
      color: "rgb(24, 119, 242)",
      connected: false,
      username: "",
      followers: "",
      status: "Not Connected",
    },
    {
      platform: "Twitter",
      icon: Twitter,
      color: "rgb(29, 155, 240)",
      connected: false,
      username: "",
      followers: "",
      status: "Not Connected",
    },
    {
      platform: "YouTube",
      icon: Youtube,
      color: "rgb(255, 0, 0)",
      connected: false,
      username: "",
      followers: "",
      status: "Not Connected",
    },
  ])

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Social Accounts</h1>
          <p className="text-gray-600 dark:text-slate-400">Connect and manage your social media accounts</p>
        </div>

        {/* Connected Accounts */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Your Accounts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {accounts.map((account) => (
              <div
                key={account.platform}
                className="group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-sm border border-white/50 dark:border-white/10"
                      style={{ backgroundColor: account.color + "20" }}
                    >
                      <account.icon className="h-8 w-8" style={{ color: account.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{account.platform}</h3>
                      <p className="text-sm font-medium text-gray-500 dark:text-slate-400">{account.username || "Not connected"}</p>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold",
                      account.connected
                        ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                        : "bg-gray-100 dark:bg-slate-700/50 text-gray-600 dark:text-slate-400"
                    )}
                  >
                    {account.connected ? (
                      <>
                        <CheckCircle className="h-3.5 w-3.5" />
                        Connected
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-3.5 w-3.5" />
                        Disconnected
                      </>
                    )}
                  </div>
                </div>

                {account.connected && (
                  <div className="mb-6 p-4 rounded-xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">Followers</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{account.followers}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-1">Status</p>
                        <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{account.status}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  {account.connected ? (
                    <>
                      <button className="flex-1 px-4 py-2.5 rounded-xl font-bold text-sm text-gray-900 dark:text-white transition-all hover:bg-white dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-900/40 border border-gray-200 dark:border-slate-800 active:scale-[0.98]">
                        <Settings className="h-4 w-4 inline mr-2" />
                        Settings
                      </button>
                      <button className="flex-1 px-4 py-2.5 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 font-bold text-sm hover:bg-red-100 dark:hover:bg-red-900/50 transition-all active:scale-[0.98]">
                        Disconnect
                      </button>
                    </>
                  ) : (
                    <button
                      className="w-full px-4 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] shadow-lg shadow-gray-200 dark:shadow-none"
                      style={{ backgroundColor: account.color }}
                    >
                      <Plus className="h-4 w-4 inline mr-2" />
                      Connect {account.platform}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">How to Connect Accounts</h3>
          <div className="space-y-3 text-gray-600 dark:text-slate-400">
            <p>1. Click the "Connect" button for your desired platform</p>
            <p>2. Authorize the application to access your account</p>
            <p>3. Your account will be automatically connected and ready to use</p>
            <p className="text-sm text-gray-500 dark:text-slate-500 mt-4">
              Note: We only request necessary permissions to post on your behalf. Your credentials are securely stored.
            </p>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
