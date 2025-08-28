"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { apiClient, type LoginResponse, type UserProfile } from "@/lib/api"

function isValidUser(data: any): data is UserProfile {
  const isValid = (
    typeof data === "object" &&
    data !== null &&
    typeof data.full_name === "string" &&
    typeof data.email === "string"
  );
  console.log("[v0] isValidUser check:", { data, isValid });
  return isValid;
}

interface User {
  id?: string
  full_name: string
  email: string
  phone?: string
  is_superadmin?: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  isAdmin: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string; isAdmin?: boolean }>
  adminLogin: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  register: (userData: { full_name: string; email: string; password: string; agree_terms: boolean }) => Promise<{
    success: boolean
    message?: string
  }>
  adminRegister: (userData: { full_name: string; email: string; password: string; agree_terms: boolean }) => Promise<{
    success: boolean
    message?: string
  }>
  logout: () => void
  updateProfile: (profileData: { full_name: string; email: string; phone: string }) => Promise<{
    success: boolean
    message?: string
  }>
  updatePassword: (passwordData: { old_password: string; new_password: string }) => Promise<{
    success: boolean
    message?: string
  }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = !!user
  const isAdmin = ((): boolean => {
    if (typeof window === "undefined") return false
    const stored = window.localStorage?.getItem("is_admin")
    const flag = stored === "true"
    const userIsAdmin = Boolean(user?.is_superadmin)
    const result = userIsAdmin || flag
    console.log("[v0] Admin detection:", { 
      userIsAdmin, 
      storedFlag: stored, 
      flag, 
      result,
      user: user 
    })
    return result
  })()

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    const token = typeof window !== "undefined" ? window.localStorage.getItem("auth_token") : null
    if (!token) {
      setIsLoading(false)
      return
    }

    const response = await apiClient.getProfile();
    if (response.success && response.data && isValidUser(response.data)) {
      setUser(response.data);
    } else {
      localStorage.removeItem("auth_token")
      setUser(null);
    }
    setIsLoading(false)
  }

  const login = async (email: string, password: string) => {
    console.log("[v0] Starting regular user login with email:", email)

    // Only try regular user login - reject admin users
    const response = await apiClient.login({ email, password });
    console.log("[v0] Regular user login response:", response)

    if (response.success && response.data) {
      const token = (response.data as LoginResponse).access_token || (response.data as LoginResponse).token || (response.data as LoginResponse).auth_token;
      if (token && typeof window !== "undefined") {
        window.localStorage.setItem("auth_token", token);
        console.log("[v0] Token saved:", token);
      }

      // Check if user is admin from response data
      const userData = response.data as any;
      const isAdminUser = userData?.user?.is_superadmin === true || userData?.role === "superadmin";
      console.log("[v0] User data:", userData);
      console.log("[v0] Is admin user:", isAdminUser);
      
      // If this is an admin user trying to login through regular login, reject them
      if (isAdminUser) {
        console.log("[v0] Admin user detected in regular login - rejecting");
        // Clear any token that might have been set
        if (typeof window !== "undefined") {
          window.localStorage.removeItem("auth_token");
        }
        return { 
          success: false, 
          message: "Administrators must use the admin login page. Please visit /admin-login" 
        };
      }

      if (typeof window !== "undefined") {
        window.localStorage.setItem("is_admin", "false")
      }

      // Kick off profile fetch in the background; don't block login UX
      void apiClient.getProfile().then((profileResponse) => {
        console.log("[v0] Profile response:", profileResponse);
        if (profileResponse.success && profileResponse.data && isValidUser(profileResponse.data)) {
          setUser(profileResponse.data);
        } else {
          setUser(null);
        }
      }).catch((err) => {
        console.warn("[v0] Profile fetch failed:", err);
      });

      return { success: true, isAdmin: false };
    }

    return { success: false, message: response.message || "Login failed" };
  }

  const adminLogin = async (email: string, password: string) => {
    console.log("[v0] Starting admin login with email:", email)

    // Only try superadmin login
    const response = await apiClient.loginSuperadmin({ email, password });
    console.log("[v0] Superadmin login response:", response)

    if (response.success && response.data) {
      const token = (response.data as LoginResponse).access_token || (response.data as LoginResponse).token || (response.data as LoginResponse).auth_token;
      if (token && typeof window !== "undefined") {
        window.localStorage.setItem("auth_token", token);
        console.log("[v0] Admin token saved:", token);
      }

      // Check if user is admin from response data
      const userData = response.data as any;
      const isAdminUser = userData?.user?.is_superadmin === true || userData?.role === "superadmin";
      console.log("[v0] Admin user data:", userData);
      console.log("[v0] Is admin user:", isAdminUser);
      
      if (!isAdminUser) {
        console.log("[v0] Non-admin user detected in admin login - rejecting");
        // Clear any token that might have been set
        if (typeof window !== "undefined") {
          window.localStorage.removeItem("auth_token");
        }
        return { 
          success: false, 
          message: "Access denied. This login is for administrators only." 
        };
      }

      if (typeof window !== "undefined") {
        window.localStorage.setItem("is_admin", "true")
      }

      // Kick off profile fetch in the background; don't block login UX
      void apiClient.getProfile().then((profileResponse) => {
        console.log("[v0] Admin profile response:", profileResponse);
        if (profileResponse.success && profileResponse.data && isValidUser(profileResponse.data)) {
          // Merge the profile data with the login response data to preserve admin status
          const mergedUser = {
            ...profileResponse.data,
            is_superadmin: userData?.user?.is_superadmin || profileResponse.data.is_superadmin
          };
          console.log("[v0] Merged admin user data:", mergedUser);
          setUser(mergedUser);
        } else {
          setUser(null);
        }
      }).catch((err) => {
        console.warn("[v0] Admin profile fetch failed:", err);
      });

      return { success: true };
    }

    return { success: false, message: response.message || "Admin login failed" };
  }

  const register = async (userData: { full_name: string; email: string; password: string; agree_terms: boolean }) => {
    console.log("[v0] Starting registration with data:", userData)

    const response = await apiClient.register({
      ...userData,
      is_verified: null,
    })

    console.log("[v0] Registration response:", response)

    if (response.success) {
      return { success: true }
    }

    return { success: false, message: response.message }
  }

  const adminRegister = async (userData: { full_name: string; email: string; password: string; agree_terms: boolean }) => {
    console.log("[v0] Starting admin registration with data:", userData)

    const response = await apiClient.registerAdmin({
      ...userData,
      is_verified: null,
    })

    console.log("[v0] Admin registration response:", response)

    if (response.success) {
      return { success: true }
    }

    return { success: false, message: response.message }
  }

  const logout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("auth_token")
      window.localStorage.removeItem("is_admin")
    }
    setUser(null)
  }

  const updateProfile = async (profileData: { full_name: string; email: string; phone: string }) => {
    const response = await apiClient.updateProfile(profileData);

    if (response.success && response.data && isValidUser(response.data)) {
      setUser(response.data);
      return { success: true };
    }

    // Don't clear the current user on a failed profile update. Return the
    // backend message so the UI can display it.
    return { success: false, message: response.message };
  }

  const updatePassword = async (passwordData: { old_password: string; new_password: string }) => {
    const response = await apiClient.updatePassword(passwordData)

    if (response.success) {
      // If backend rotated tokens, save the new one(s)
      const data: any = response.data
      if (data?.access_token) {
        localStorage.setItem("auth_token", data.access_token)
      }
      if (data?.refresh_token) {
        localStorage.setItem("refresh_token", data.refresh_token)
      }
      return { success: true }
    }

    return { success: false, message: response.message }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        isAdmin,
        login,
        adminLogin,
        register,
        adminRegister,
        logout,
        updateProfile,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
