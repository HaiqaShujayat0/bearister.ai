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
  // Silence Chrome DevTools probe requests in dev server logs
  route(".well-known/appspecific/com.chrome.devtools.json", "routes/devtools.tsx"),
] satisfies RouteConfig;
