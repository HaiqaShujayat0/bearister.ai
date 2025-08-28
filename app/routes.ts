import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("signin", "routes/signin.tsx"),
  route("signup", "routes/signup.tsx"),
  route("forgot-password", "routes/forgot-password.tsx"),
  route("email-sent", "routes/email-sent.tsx"),
  route("reset-password", "routes/reset-password.tsx"),
  // Alias used by backend email links: /auth/reset-password
  route("auth/reset-password", "routes/auth.reset-password.tsx"),
  route("verify-email", "routes/verify-email.tsx"),
  route("auth/verify-email", "routes/auth.verify-email.tsx"),
  route("profile", "routes/profile.tsx"),
  route("subscription", "routes/subscription.tsx"),
  route("dashboard", "routes/user-dashboard.tsx"),
  
  // Admin routes
  route("admin-login", "routes/admin-login.tsx"),
  // Alias: support /admin-signin via a wrapper file to avoid duplicate route ids
  route("admin-signin", "routes/admin-signin.tsx"),
  route("admin-signup", "routes/admin-signup.tsx"),
  route("admin-forgot-password", "routes/admin-forgot-password.tsx"),
  route("admin-email-sent", "routes/admin-email-sent.tsx"),
  route("admin-reset-password", "routes/admin-reset-password.tsx"),
  
  route("admin", "routes/admin-dashboard.tsx"),
  route("admin/obi-chat", "routes/admin.obi-chat.tsx"),
  route("admin/users", "routes/admin.users.tsx"),
  // Silence Chrome DevTools probe requests in dev server logs
  route(".well-known/appspecific/com.chrome.devtools.json", "routes/devtools.tsx"),
] satisfies RouteConfig;
