// middleware.ts

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

// I18n routing
const handleI18nRouting = createMiddleware(routing);

// Auth kerak bo'lgan route'lar
const isProtectedRoute = createRouteMatcher(["/:locale/dashboard(.*)"]);

// Auth'dan ozod route'lar
// const isIgnoredRoute = createRouteMatcher([
//   "/api/webhook",
//   "/:locale/api/webhook",
// ]);

// Birlashtirilgan middleware
export default clerkMiddleware(async (auth, req) => {
  // Auth'dan ozod route bo'lsa — hech narsa qilmang, lekin i18n ishlasin
  // if (isIgnoredRoute(req)) return handleI18nRouting(req);

  // Auth kerak bo'lgan route
  if (isProtectedRoute(req)) {
    await auth.protect(); // auth() ni chaqirish () bilan!
  }

  // Har doim i18n routing ishlasin
  return handleI18nRouting(req);
});

// Next.js matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
