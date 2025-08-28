"use client"

import AdminHeader from "@/components/admin/admin-header"
import AdminSidebar from "@/components/admin/admin-sidebar"
import { useAuth } from "@/contexts/auth-context"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { api, type UserWithSubscription } from "@/lib/api"

export default function AdminUsers() {
  const { isAuthenticated, isLoading, isAdmin } = useAuth()
  const navigate = useNavigate()

  const [users, setUsers] = useState<UserWithSubscription[] | null>(null)
  const [loadingUsers, setLoadingUsers] = useState(false)
  const [usersError, setUsersError] = useState<string | null>(null)

  useEffect(() => {
    if (isAuthenticated && !isAdmin) navigate("/", { replace: true })
  }, [isAuthenticated, isAdmin, navigate])

  useEffect(() => {
    let mounted = true
    const fetchUsers = async () => {
      setLoadingUsers(true)
      setUsersError(null)
      const res = await api.getAdminUsers()
      if (!mounted) return
      setLoadingUsers(false)

      if (!res.success) {
        setUsersError(res.message || "Failed to fetch users")
        return
      }

      // Backend may return either an array of users or a wrapper object
      // like { users: [...], total: number }. Accept both shapes.
      if (Array.isArray(res.data)) {
        setUsers(res.data)
        return
      }

      if (res.data && typeof res.data === "object" && Array.isArray((res.data as any).users)) {
        setUsers((res.data as any).users)
        return
      }

      // Unknown but successful shape - show helpful debug message
      setUsersError("Unexpected response shape from server")
    }

    // Only fetch if user is admin (frontend guard)
    if (isAuthenticated && isAdmin) {
      void fetchUsers()
    }

    return () => { mounted = false }
  }, [isAuthenticated, isAdmin])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // In development, render the page even if not authenticated so dummy data is visible

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminHeader />

          <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Header Row */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">User Management</h2>
                  <p className="text-xs text-gray-500">71 total users</p>
                </div>
                <div className="w-full max-w-xs">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                    />
                    <svg className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600">
                      <th className="text-left font-medium px-4 py-3 border-b border-gray-200">Name</th>
                      <th className="text-left font-medium px-4 py-3 border-b border-gray-200">Email</th>
                      <th className="text-left font-medium px-4 py-3 border-b border-gray-200">Plan</th>
                      <th className="text-left font-medium px-4 py-3 border-b border-gray-200">Messages Used</th>
                      <th className="text-left font-medium px-4 py-3 border-b border-gray-200">Documents Used</th>
                      <th className="text-left font-medium px-4 py-3 border-b border-gray-200">Join Date</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {loadingUsers && (
                      <tr>
                        <td colSpan={6} className="px-4 py-6 text-center text-gray-600">Loading users...</td>
                      </tr>
                    )}
+
                    {usersError && !loadingUsers && (
                      <tr>
                        <td colSpan={6} className="px-4 py-6 text-center text-red-600">{usersError}</td>
                      </tr>
                    )}
+
                    {!loadingUsers && users && users.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-4 py-6 text-center text-gray-600">No users found</td>
                      </tr>
                    )}
+
                    {!loadingUsers && users && users.map((user) => (
                      <tr key={String(user.id ?? user.email ?? Math.random())} className="hover:bg-orange-50/40 transition-colors">
                        <td className="px-4 py-3 text-gray-900">{user.full_name ?? "—"}</td>
                        <td className="px-4 py-3 text-gray-700">{user.email ?? "—"}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">{user.subscription_data?.plan ?? "Free"}</span>
                        </td>
                        <td className="px-4 py-3"><span className="text-green-600 font-medium">{user.subscription_data?.messages_used ?? 0}/{user.subscription_data?.messages_limit ?? 0}</span></td>
                        <td className="px-4 py-3"><span className="text-green-600 font-medium">{user.subscription_data?.documents_used ?? 0}/{user.subscription_data?.documents_limit ?? 0}</span></td>
                        <td className="px-4 py-3 text-gray-700">{user.created_at ? user.created_at.split("T")[0] : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 text-xs text-gray-600">
                <span>Showing 1–5 of 71 users</span>
                <div className="space-x-2">
                  <button className="px-3 py-1.5 rounded border border-gray-300 hover:bg-gray-50">Prev</button>
                  <button className="px-3 py-1.5 rounded border border-gray-300 hover:bg-gray-50">Next</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}


