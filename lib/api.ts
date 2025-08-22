const API_BASE_URL = "http://127.0.0.1:8000"

export interface RegisterRequest {
  full_name: string
  email: string
  password: string
  agree_terms: boolean
  is_verified?: boolean | null
}

export interface LoginRequest {
  email: string
  password: string
}

export interface UpdateProfileRequest {
  full_name: string
  email: string
  phone: string
}

export interface UpdatePasswordRequest {
  old_password: string
  new_password: string
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
}

export interface LoginResponse {
  access_token?: string;
  token?: string;
  auth_token?: string;
}

export interface UserProfile {
  id?: string;
  full_name: string;
  email: string;
  phone?: string;
}

class ApiClient {
  private getAuthHeaders() {
    const token = localStorage.getItem("auth_token")
    return {
      ...(token && { Authorization: `Bearer ${token}` }),
    }
  }

  async request<T>(endpoint: string, options: (RequestInit & { timeoutMs?: number }) = {}): Promise<ApiResponse<T>> {
    try {
      // Ensure endpoint starts with a slash
      const safeEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
      const { timeoutMs = 20000, ...fetchOptions } = options as any

      console.log(`API: Making request to ${API_BASE_URL}${safeEndpoint}`)
      console.log("API: Request options:", { method: fetchOptions.method, headers: fetchOptions.headers, body: fetchOptions.body })

      // Add a hard timeout so UI never hangs indefinitely
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

      const authHeaders = this.getAuthHeaders()
      const providedHeaders = (fetchOptions as any).headers || {}
      const headers = { ...authHeaders, ...providedHeaders }

      const response = await fetch(`${API_BASE_URL}${safeEndpoint}`, {
        mode: "cors",
        credentials: "include",
        headers,
        signal: controller.signal,
        ...fetchOptions,
      })

      clearTimeout(timeoutId)

      console.log("[v0] Response status:", response.status)
      console.log("[v0] Response ok:", response.ok)
      console.log("[v0] Response headers:", Object.fromEntries(response.headers.entries()))

      // Safely parse JSON only when the response has a JSON content type.
      // Some endpoints may return an empty body or plain text (eg. 204/empty);
      // attempting response.json() on an empty body throws, so guard it.
      let data: any = undefined
      const contentType = response.headers.get("content-type") || ""
      if (contentType.includes("application/json")) {
        try {
          data = await response.json()
        } catch (parseErr) {
          console.warn("[v0] Failed to parse JSON response:", parseErr)
          data = undefined
        }
      } else {
        // Fallback: try to read as text (useful for plain text responses)
        try {
          const text = await response.text()
          data = text && text.length ? text : undefined
        } catch (textErr) {
          console.warn("[v0] Failed to read response text:", textErr)
          data = undefined
        }
      }

      console.log("[v0] Response data:", data)

      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`

        if (data.detail) {
          if (Array.isArray(data.detail)) {
            // FastAPI validation errors - extract first error message
            errorMessage = data.detail[0]?.msg || errorMessage
          } else if (typeof data.detail === "string") {
            errorMessage = data.detail
          }
        } else if (data.message && typeof data.message === "string") {
          errorMessage = data.message
        }

        return {
          success: false,
          message: errorMessage,
        }
      }

      return {
        success: true,
        data,
      }
    } catch (error) {
      console.error("[v0] API request failed:", error)

      let humanMessage = "Network error occurred"
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        humanMessage =
          `Cannot connect to server. Please check if your backend is running at ${API_BASE_URL} and CORS is configured.`
      } else if ((error as any)?.name === "AbortError") {
        const tm = (options as any)?.timeoutMs ?? 20000
        humanMessage = `Request timed out after ${Math.round(tm / 1000)}s`
      } else if (error instanceof Error && error.message) {
        humanMessage = error.message
      }

      return {
        success: false,
        message: humanMessage,
      }
    }
  }

  // Auth endpoints
  async register(userData: RegisterRequest) {
    return this.request("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
      timeoutMs: 30000,
    })
  }


  async login(credentials: LoginRequest) {
    return this.request<LoginResponse>("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      timeoutMs: 25000,
    });
  }

  async getProfile() {
    return this.request<UserProfile>("/auth/profile");
  }

  async updateProfile(profileData: UpdateProfileRequest) {
    return this.request("/auth/update_profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData),
    })
  }

  async updatePassword(passwordData: UpdatePasswordRequest) {
    return this.request("/auth/update_password", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passwordData),
    })
  }

  async requestPasswordReset(email: string) {
    const form = new URLSearchParams()
    form.set("email", email)
  return this.request("/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
      timeoutMs: 25000,
    })
  }

  async resetPassword(token: string, newPassword: string) {
    console.log("=== API RESET PASSWORD DEBUG ===")
    console.log("API: resetPassword called with token length:", token.length)
    console.log("API: Token first 10 chars:", token.substring(0, 10) + "...")
    console.log("API: Password length:", newPassword.length)
    
    const form = new URLSearchParams()
    form.set("token", token)
    form.set("new_password", newPassword)
    
    console.log("API: Form data (token hidden):", `token=***&new_password=***`)
    console.log("API: Making request to /auth/reset-password")
    console.log("API: Full URL:", `${API_BASE_URL}/auth/reset-password`)
    
    const result = await this.request("/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
      timeoutMs: 25000,
    })
    
    console.log("API: resetPassword response:", result)
    console.log("API: Response success:", result.success)
    console.log("API: Response message:", result.message)
    console.log("=== END API DEBUG ===")
    return result
  }

  async verifyEmail(token: string) {
    // The backend expects the verification token as a query parameter
    // (e.g. /auth/verify-email?token=...). Sending it in the URL avoids
    // validation errors (422) when the server requires the query param.
    const safeToken = encodeURIComponent(token)
    return this.request(`/auth/verify-email?token=${safeToken}`, {
      method: "GET",
    })
  }

  async refreshToken() {
    return this.request("/auth/refresh", {
      method: "POST",
    })
  }
}

export const apiClient = new ApiClient()

export const api = apiClient
export default apiClient
