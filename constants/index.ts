import { Contact, Home, ListVideo, Rss } from "lucide-react";

export const navLinks = [
  {route: "/", label: "Home", icon: Home},
  {route: "/courses", label: "Courses", icon: ListVideo},
  {route: "/blogs", label: "Blogs", icon: Rss},
  {route: "/contact", label: "Contact", icon: Contact},
]

export const languages = [
  {code: "en", label: "English"},
  {code: "uz", label: "O'zbek"},
  {code: "ru", label: "Русский"},
  {code: "tr", label: "Türkçe"}
]