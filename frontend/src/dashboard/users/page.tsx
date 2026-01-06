

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Search, MoreVertical, Trash2, Eye } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CreateUserDialog } from "@/components/create-user-dialog"
import { UserDetailsDialog } from "@/components/user-details-dialog"
import { cn } from "@/lib/utils"


type User = {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive"
  postsCreated: number
  lastActive: string
}

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.j@company.com",
      role: "Content Manager",
      status: "active",
      postsCreated: 847,
      lastActive: "2 hours ago",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael.c@company.com",
      role: "Marketing Lead",
      status: "active",
      postsCreated: 623,
      lastActive: "1 day ago",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      email: "emily.r@company.com",
      role: "Social Media Specialist",
      status: "active",
      postsCreated: 1204,
      lastActive: "3 hours ago",
    },
    {
      id: "4",
      name: "David Kim",
      email: "david.k@company.com",
      role: "Content Creator",
      status: "inactive",
      postsCreated: 156,
      lastActive: "2 weeks ago",
    },
  ])

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId))
  }

  const handleViewDetails = (user: User) => {
    setSelectedUser(user)
    setDetailsDialogOpen(true)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">User Management</h1>
            <p className="text-muted-foreground">Create and manage user accounts for your team.</p>
          </div>
          <Button onClick={() => setCreateDialogOpen(true)} className="gap-2">
            <UserPlus className="h-4 w-4" />
            Create User
          </Button>
        </div>

        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-slate-500" />
              <Input
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11 bg-white/50 dark:bg-slate-900/30 border-gray-200 dark:border-slate-800 rounded-xl"
              />
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-800">
                  <TableHead className="font-bold text-gray-900 dark:text-gray-100">Name</TableHead>
                  <TableHead className="font-bold text-gray-900 dark:text-gray-100">Email</TableHead>
                  <TableHead className="font-bold text-gray-900 dark:text-gray-100">Role</TableHead>
                  <TableHead className="font-bold text-gray-900 dark:text-gray-100">Status</TableHead>
                  <TableHead className="font-bold text-gray-900 dark:text-gray-100">Posts Created</TableHead>
                  <TableHead className="font-bold text-gray-900 dark:text-gray-100">Last Active</TableHead>
                  <TableHead className="text-right font-bold text-gray-900 dark:text-gray-100">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-white/50 dark:hover:bg-slate-800/30 border-gray-100 dark:border-slate-800">
                    <TableCell className="font-bold text-gray-900 dark:text-white">{user.name}</TableCell>
                    <TableCell className="text-gray-600 dark:text-slate-400 font-medium">{user.email}</TableCell>
                    <TableCell className="font-medium">{user.role}</TableCell>
                    <TableCell>
                      <Badge
                        className={cn(
                          "font-bold px-3 py-1 rounded-full",
                          user.status === "active"
                            ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                            : "bg-gray-100 dark:bg-slate-700/50 text-gray-600 dark:text-slate-400"
                        )}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-bold text-gray-900 dark:text-white">{user.postsCreated}</TableCell>
                    <TableCell className="text-gray-500 dark:text-slate-500 font-medium">{user.lastActive}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
                          <DropdownMenuItem onClick={() => handleViewDetails(user)} className="cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteUser(user.id)} className="text-red-600 dark:text-red-400 cursor-pointer hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-slate-500">No users found.</p>
            </div>
          )}
        </div>
      </div>

      <CreateUserDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onUserCreated={(newUser) => {
          setUsers([...users, { ...newUser, id: Date.now().toString() }])
        }}
      />

      <UserDetailsDialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen} user={selectedUser} />
    </DashboardLayout>
  )
}
