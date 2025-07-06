import { Contact, Home, ListVideo, Rss } from "lucide-react";

export const navLinks = [
  {route: "/", label: "navLink1", icon: Home},
  {route: "/courses", label: "navLink2", icon: ListVideo},
  {route: "/blogs", label: "navLink3", icon: Rss},
  {route: "/contact", label: "navLink4", icon: Contact},
]

export const languages = [
  {code: "en", label: "English"},
  {code: "uz", label: "O'zbek"},
  {code: "ru", label: "Русский"},
  {code: "tr", label: "Türkçe"}
]