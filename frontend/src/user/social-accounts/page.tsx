"use client"

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { useState } from "react"
import { Instagram, Linkedin, Facebook, Twitter, Youtube, Plus, CheckCircle, AlertCircle, Settings } from "lucide-react"

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
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Accounts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {accounts.map((account) => (
              <div
                key={account.platform}
                className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="h-14 w-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: account.color + "20" }}
                    >
                      <account.icon className="h-7 w-7" style={{ color: account.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{account.platform}</h3>
                      <p className="text-sm text-gray-600 dark:text-slate-400">{account.username || "Not connected"}</p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium ${
                      account.connected
                        ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                        : "bg-gray-200 dark:bg-slate-700/50 text-gray-600 dark:text-slate-400"
                    }`}
                  >
                    {account.connected ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Connected
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-4 w-4" />
                        Disconnected
                      </>
                    )}
                  </div>
                </div>

                {account.connected && (
                  <div className="mb-4 p-3 rounded-lg bg-white/50 dark:bg-slate-900/30 border border-gray-200 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-slate-400">Followers</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">{account.followers}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-slate-400">Status</p>
                        <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{account.status}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  {account.connected ? (
                    <>
                      <button className="flex-1 px-4 py-2 rounded-lg font-medium text-gray-900 dark:text-white transition-colors hover:bg-gray-200 dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-900/30 border border-gray-200 dark:border-slate-800">
                        <Settings className="h-4 w-4 inline mr-2" />
                        Settings
                      </button>
                      <button className="flex-1 px-4 py-2 rounded-lg bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 font-medium hover:bg-red-200 dark:hover:bg-red-500/30 transition-colors">
                        Disconnect
                      </button>
                    </>
                  ) : (
                    <button
                      className="w-full px-4 py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90"
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
