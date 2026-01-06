"use client"

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

        <Card className="p-6 glass-strong">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Posts Created</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge
                        variant={user.status === "active" ? "default" : "secondary"}
                        className={user.status === "active" ? "bg-success text-foreground" : ""}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.postsCreated}</TableCell>
                    <TableCell className="text-muted-foreground">{user.lastActive}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleViewDetails(user)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteUser(user.id)} className="text-destructive">
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
              <p className="text-muted-foreground">No users found.</p>
            </div>
          )}
        </Card>
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
