import { Bell, Contact, CreditCard, FileCode, GaugeCircle, Home, ListVideo, MessageSquareMore, MonitorPlay, Rss, Settings2, User } from "lucide-react";
import { DiCisco, DiCreativecommonsBadge, DiDjango, DiDocker, DiGhost, DiGithub, DiLess, DiMailchimp, DiMeteorfull, DiNetmagazine, DiNginx, DiStylus, DiYahoo } from "react-icons/di"

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

export const companies = [
  DiCisco,
  DiCreativecommonsBadge,
  DiGhost,
  DiGithub,
  DiMeteorfull,
  DiLess,
  DiMailchimp,
  DiNetmagazine,
  DiNginx,
  DiStylus,
  DiYahoo,
  DiDjango,
  DiDocker
]

export const filterCourses = [
  {label: "category1", name: "all"},
  {label: "category2", name: "trending"},
  {label: "category3", name: "popular"},
  {label: "category4", name: "futured"},
]
export const filterLevels = [
  {label: "level1", name: "all"},
  {label: "level2", name: "beginner"},
  {label: "level3", name: "intermediate"},
  {label: "level4", name: "advanced"},
]

export const courses = [
  {
    title: "JavaScript",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F35ca3db9-fb43-4f12-bd48-8b08a503db09-kilwwj.png&w=1920&q=75",
    author: {
      image:
        "https://www.logoai.com/uploads/resources/2023/06/19/1c29b33c0049c59ab9b0e050a84afda4.jpeg",
      name: "Chris Impley",
    },
    oldPrice: 179,
    currentPrice: 79,
    level: "Beginner",
  },
  {
    title: "ReactJS",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
    author: {
      image:
        "https://www.logoai.com/uploads/resources/2023/06/19/c01fb57bcf20a6c84c34d3f2850ebb48.jpeg",
      name: "Chris Impley",
    },
    oldPrice: 159,
    currentPrice: 59,
    level: "Intermidate",
  },
  {
    title: "VueJS",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbddfc919-2260-46dd-a078-b956bd9a377c-kilwcq.png&w=1920&q=75",
    author: {
      image:
        "https://www.logoai.com/uploads/resources/2023/06/19/2b701727657ebf0cafcef89d6af38d26.jpeg",
      name: "Chris Impley",
    },
    oldPrice: 129,
    currentPrice: 29,
    level: "Intermidate",
  },
  {
    title: "Telegram BOT",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F1662922d-b61d-401b-aa1a-693a6231d8a0-kilw9a.png&w=1920&q=75",
    author: {
      image:
        "https://www.logoai.com/uploads/resources/2023/06/19/c744293dbda881eef75f15e8692b52d2.jpeg",
      name: "Chris Impley",
    },
    oldPrice: 209,
    currentPrice: 109,
    level: "Intermidate",
  },
  {
    title: "React Native",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F27f17594-ae28-4fe1-86ce-964a5c89c78d-kilw7k.png&w=1920&q=75",
    author: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZgBXJDe909hB50HsyV5la6IDCdzzzfHHYY-BLIMHTLhog_7H55KfoIXObFBnXZIgxh4&usqp=CAU",
      name: "Chris Impley",
    },
    oldPrice: 129,
    currentPrice: 29,
    level: "Intermidate",
  },
  {
    title: "Foundation",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbcdfb541-3300-430f-b8b2-ff0fb57df056-kilw6p.png&w=1920&q=75",
    author: {
      image:
        "https://www.logoai.com/uploads/resources/2023/06/19/a24835b603e1ef9549643f7983873b4c.jpeg",
      name: "Chris Impley",
    },
    oldPrice: 209,
    currentPrice: 109,
    level: "Intermidate",
  },
];

export const categories = [
  {
    icon: "/img/categories/digital-marketing.svg",
    label: "Digital Marketing",
  },
  { icon: "/img/categories/web-development.svg", label: "Web Development" },
  { icon: "/img/categories/graphic-design.svg", label: "Graphic Design" },
  { icon: "/img/categories/photography.svg", label: "Photography" },
  { icon: "/img/categories/social-sciences.svg", label: "Social Sciences" },
  { icon: "/img/categories/art-humanities.svg", label: "Art & Humanities" },
  {
    icon: "/img/categories/personal-development.svg",
    label: "Personal Development",
  },
  { icon: "/img/categories/it-software.svg", label: "IT & Software" },
];

export const instructors = [
  {
    name: "Chris Impley",
    image:
      "https://img.freepik.com/free-photo/riding-public-transport-way-work-shot-positive-friendly-handsome-male-with-moustache-beard-glasses-wearing-earphones-listening-music-getting-satisfaction-from-great-bids_176420-22419.jpg?semt=ais_items_boosted&w=740",
    job: "Web Developer",
  },
  {
    name: "Thomas Winter",
    image:
      "https://media.istockphoto.com/id/637893384/photo/staying-connected-throughout-the-day.jpg?s=612x612&w=0&k=20&c=X8J72joXZlhEyHk5UZFfQp0Ow1tgF8X5oLTCEdlhtxo=",
    job: "Photographer",
  },
  {
    name: "Emma Watson",
    image:
      "https://media.istockphoto.com/id/880486494/photo/smiling-businessman-using-laptop.jpg?s=612x612&w=0&k=20&c=jNCdH9BlNovO74PeVmSJxVW3SsTktEPK8b4JygmfdqY=",
    job: "Digital Marketer",
  },
  {
    name: "John Doe",
    image:
      "https://static.independent.co.uk/2023/05/01/11/be5fda0ecbee4f69e504b721f23a0608Y29udGVudHNlYXJjaGFwaSwxNjgzMDIyNTM1-2.71789316.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp",
    job: "Designer",
  },
];

export const learningJourney = [
  {
    title: "startTitle1",
    excerpt: "startDescription1",
    image: "/img/journey/rating.png",
  },
  {
    title: "startTitle2",
    excerpt: "startDescription2",
    image: "/img/journey/science.png",
  },
  {
    title: "startTitle3",
    excerpt: "startDescription3",
    image: "/img/journey/online-learning.png",
  },
  {
    title: "startTitle4",
    excerpt: "startDescription4",
    image: "/img/journey/certificate.png",
  },
];

export const courseLevels = ["beginner", "intermediate", "advanced"];
export const courseCategory = [
  "front-end",
  "back-end",
  "full-stack",
  "mobile",
  "desktop",
  "game",
];
export const courseLanguage = ["english", "uzbek", "russian", "turkish"];

export const editorConfig = {
  height: 150,
  menubar: false,
  plugins: [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "preview",
    "anchor",
    "searchreplace",
    "visualblocks",
    "codesample",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
  ],
  toolbar: "link |" + "bullist numlist",
  content_style: "body { font-family:Inter; font-size:16px }",
  skin: "oxide-dark",
  content_css: "dark",
};

export const instructorNavLinks = [
  { label: "Dashboard", route: "/instructor", icon: GaugeCircle },
  { label: "My Courses", route: "/instructor/my-courses", icon: MonitorPlay },
  {
    label: "Create Course",
    route: "/instructor/create-course",
    icon: FileCode,
  },
  { label: "Reviews", route: "/instructor/reviews", icon: MessageSquareMore },
  { label: "Settings", route: "/instructor/settings", icon: Settings2 },
];

export const profileNavLinks = [
  { label: "dashboard", route: "/profile", icon: GaugeCircle },
  { label: "myCourses", route: "/profile/my-courses", icon: MonitorPlay },
  { label: "wishlist", route: "/profile/wishlist", icon: ListVideo },
  { label: "creditCards", route: "/profile/credit-cards", icon: CreditCard },
  { label: "reviews", route: "/profile/reviews", icon: MessageSquareMore },
  { label: "notification", route: "/profile/notifications", icon: Bell },
  { label: "settings", route: "/profile/settings", icon: Settings2 },
];

export const adminNavLinks = [
  { label: "Dashboard", route: "/admin", icon: GaugeCircle },
  { label: "All courses", route: "/admin/all-courses", icon: MonitorPlay },
  { label: "Instructors", route: "/admin/instructors", icon: User },
  { label: "Reviews", route: "/admin/reviews", icon: MessageSquareMore },
  { label: "Notifications", route: "/admin/notifications", icon: Bell },
];

export const amountOptions = [
  { value: "1", label: "photo" },
  { value: "2", label: "photos" },
  { value: "3", label: "photos" },
  { value: "4", label: "photos" },
  { value: "5", label: "photos" },
];

export const resolutionOptions = [
  { value: "256x256", label: "256x256" },
  { value: "512x512", label: "512x512" },
  { value: "1024x1024", label: "1024x1024" },
];