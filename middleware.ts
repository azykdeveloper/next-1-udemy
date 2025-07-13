import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

// Auth kerak bo'lgan yo'llar
const isProtectedRoute = createRouteMatcher(["/locale/dashboard(.*)"]);

// Auth dan ozod qilinadigan yo'llar
const isIgnoredRoute = createRouteMatcher([
  "/en/api/webhook", // Webhook route ni to'liq ignore qilish
]);

export default clerkMiddleware(async (auth, req) => {
  // Webhook route uchun authentication ni to'liq bypass qilish
  if (isIgnoredRoute(req)) {
    return handleI18nRouting(req);
  }

  // Faqat protected route'lar uchun authentication talab qilish
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  return handleI18nRouting(req);
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
