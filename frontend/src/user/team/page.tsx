

import { UserDashboardLayout } from "@/components/user-dashboard-layout"
import { UserPlus, Crown, Shield, User, CheckCircle2, Clock, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"


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
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight">Team Collaboration</h1>
            <p className="text-gray-600 dark:text-slate-400">Manage team members and approval workflows</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 dark:shadow-none active:scale-[0.98]">
            <UserPlus className="h-5 w-5" />
            Invite Member
          </button>
        </div>

        {/* Pending Approvals */}
        {pendingApprovals.length > 0 && (
          <div className="rounded-2xl p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 border border-amber-100 dark:border-amber-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Pending Approvals ({pendingApprovals.length})</h2>
            </div>
            <div className="space-y-4">
              {pendingApprovals.map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl p-4 flex items-center justify-between bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-white/50 dark:border-slate-800 transition-all hover:scale-[1.01]"
                >
                  <div>
                    <p className="text-gray-900 dark:text-white font-bold mb-1 leading-tight">{post.title}</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><User className="h-3 w-3" /> By {post.creator}</span>
                      <span>{post.platform}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-md shadow-emerald-100 dark:shadow-none active:scale-95">
                      <CheckCircle2 className="h-5 w-5" />
                    </button>
                    <button className="p-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-all shadow-md shadow-red-100 dark:shadow-none active:scale-95">
                      <XCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Roles */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Team Roles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.id}
                className="rounded-2xl p-6 bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800 transition-all hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800 shadow-sm"
              >
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/50 dark:border-white/10"
                  style={{ backgroundColor: role.color + "20" }}
                >
                  <role.icon className="h-7 w-7" style={{ color: role.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{role.name}</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Team Members ({teamMembers.length})</h2>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl p-6 bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-gray-100 dark:border-slate-800 transition-all hover:scale-[1.01] shadow-sm"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="h-20 w-20 rounded-2xl bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-indigo-200 dark:shadow-none flex-shrink-0">
                    {member.avatar}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                      <p className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</p>
                      <span
                        className={cn(
                          "px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-widest",
                          member.status === "active"
                            ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                            : "bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400"
                        )}
                      >
                        {member.status}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-slate-400 font-medium mb-4">{member.email}</p>
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-8 gap-y-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">Role</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{member.role}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">Posts</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{member.postsCreated}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">Last Active</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{member.lastActive}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-gray-950 dark:text-white font-bold transition-all hover:bg-gray-50 border border-gray-200 dark:border-slate-800 shadow-sm active:scale-95">
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
