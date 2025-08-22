"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { apiClient, type LoginResponse, type UserProfile } from "@/lib/api"

function isValidUser(data: any): data is UserProfile {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.full_name === "string" &&
    typeof data.email === "string"
  );
}

interface User {
  id?: string
  full_name: string
  email: string
  phone?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  register: (userData: { full_name: string; email: string; password: string; agree_terms: boolean }) => Promise<{
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

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    const token = localStorage.getItem("auth_token")
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
    console.log("[v0] Starting login with email:", email)

    const response = await apiClient.login({ email, password });
    console.log("[v0] Login response:", response);

    if (response.success && response.data) {
      const token = (response.data as LoginResponse).access_token || (response.data as LoginResponse).token || (response.data as LoginResponse).auth_token;
      if (token) {
        localStorage.setItem("auth_token", token);
        console.log("[v0] Token saved:", token);
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

      return { success: true };
    }

    return { success: false, message: response.message || "Login failed" };
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

  const logout = () => {
    localStorage.removeItem("auth_token")
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
        login,
        register,
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
