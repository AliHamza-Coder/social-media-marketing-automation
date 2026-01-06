"use client"

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { UserPlus, Crown, Shield, User, CheckCircle2, Clock, XCircle } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@company.com",
      role: "Admin",
      status: "active",
      avatar: "SJ",
      postsCreated: 145,
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@company.com",
      role: "Editor",
      status: "active",
      avatar: "MC",
      postsCreated: 89,
      lastActive: "5 hours ago",
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma@company.com",
      role: "Viewer",
      status: "pending",
      avatar: "EW",
      postsCreated: 12,
      lastActive: "1 day ago",
    },
  ]

  const pendingApprovals = [
    {
      id: 1,
      title: "New Product Launch Announcement",
      creator: "Michael Chen",
      platform: "LinkedIn",
      date: "2 hours ago",
    },
    {
      id: 2,
      title: "Behind the Scenes Content",
      creator: "Emma Wilson",
      platform: "Instagram",
      date: "5 hours ago",
    },
  ]

  const roles = [
    {
      id: "admin",
      name: "Admin",
      icon: Crown,
      description: "Full access to all features and settings",
      color: "rgb(245, 158, 11)",
    },
    {
      id: "editor",
      name: "Editor",
      icon: Shield,
      description: "Can create and edit posts, requires approval",
      color: "rgb(99, 102, 241)",
    },
    {
      id: "viewer",
      name: "Viewer",
      icon: User,
      description: "Can view analytics and scheduled posts",
      color: "rgb(100, 116, 139)",
    },
  ]

  return (
    <UserDashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Team Collaboration</h1>
            <p className="text-slate-400">Manage team members and approval workflows</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors">
            <UserPlus className="h-5 w-5" />
            Invite Member
          </button>
        </div>

        {/* Pending Approvals */}
        {pendingApprovals.length > 0 && (
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(245, 158, 11, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(245, 158, 11, 0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-amber-400" />
              <h2 className="text-xl font-bold text-white">Pending Approvals ({pendingApprovals.length})</h2>
            </div>
            <div className="space-y-4">
              {pendingApprovals.map((post) => (
                <div
                  key={post.id}
                  className="rounded-xl p-4 flex items-center justify-between"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div>
                    <p className="text-white font-medium mb-1">{post.title}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>By {post.creator}</span>
                      <span>{post.platform}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors">
                      <XCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Roles */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Team Roles</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.id}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: role.color + "20" }}
                >
                  <role.icon className="h-6 w-6" style={{ color: role.color }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{role.name}</h3>
                <p className="text-sm text-slate-400">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(99, 102, 241, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Team Members ({teamMembers.length})</h2>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-16 w-16 rounded-xl flex items-center justify-center text-xl font-bold text-white"
                    style={{ background: "rgba(99, 102, 241, 0.3)" }}
                  >
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-white font-semibold text-lg">{member.name}</p>
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-medium ${
                          member.status === "active"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {member.status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{member.email}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <span className="text-slate-400">
                        Role: <span className="text-white font-medium">{member.role}</span>
                      </span>
                      <span className="text-slate-400">
                        Posts: <span className="text-white font-medium">{member.postsCreated}</span>
                      </span>
                      <span className="text-slate-400">Last active: {member.lastActive}</span>
                    </div>
                  </div>
                  <button
                    className="px-4 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
