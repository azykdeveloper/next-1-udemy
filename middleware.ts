import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

// 👇 Auth kerak bo‘lgan yo‘llar
const isProtectedRoute = createRouteMatcher(["/:locale/dashboard(.*)"]);

// 👇 Auth dan ozod qilinadigan yo‘llar
const isIgnoredRoute = createRouteMatcher([
  "/en/api/webhooks", // 👈 bu yerda webhook route ni ignore qilyapmiz
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req) && !isIgnoredRoute(req)) {
    await auth.protect();
  }

  return handleI18nRouting(req);
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
