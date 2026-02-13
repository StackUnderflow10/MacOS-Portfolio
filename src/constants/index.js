const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jan 31, 2026",
    title:
      "Full-stack food ordering platform with admin dashboard, role-based authentication, and real-time order management.",
    image: "/images/GreenPlate_logo.png",
    link: "https://github.com/GreenPlateByCodeNewbies",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Automated attendance management system built as a scalable backend service.",
    image: "/images/Sup.png",
    link: "https://github.com/StackUnderflow10/venom",
  },
  {
    id: 3,
    date: "Sep 28, 2025",
    title: "Search engine for verified student discounts using .edu.in email authentication.",
    image: "/images/sdf.png",
    link: "https://github.com/StackUnderflow10/student-discount-finder",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js"],
  },
  {
    category: "Languages",
    items: ["C++", "Java", "Python", "JavaScript", "C#"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express", "Flask", "FastAPI"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Firestore"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Firebase", "Postman"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/StackUnderflow10",
  },
  {
    id: 2,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/_syntaxterror10",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/jeet-sarkar-9b8a41319/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/venom_5.png",
  },
  {
    id: 2,
    img: "/images/venom_2.png",
  },
  {
    id: 3,
    img: "/images/g-admin2.png",
  },
  {
    id: 4,
    img: "/images/g-admin.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "GreenPlate",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "GreenPlate.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "GreenPlate is a smart campus pre-ordering platform built to eliminate long queues and wasted time during short tiffin breaks.",

              "Instead of students rushing to the canteen and waiting for food to be prepared, the app allows them to place orders in advance — whether they’re in class or anywhere on campus.",

              "The system provides real-time order status updates, so students only head to the counter when their food is ready, making the entire experience faster and more efficient.",

              "Think of it as bringing food-delivery level convenience to a college canteen — optimized for limited break time and high student traffic.",

              "To simplify operations for canteen staff, GreenPlate includes an image-based menu upload system that automatically extracts and structures menu data, along with secure role-based access control (RBAC) for organized management.",

              "Built using React (TypeScript) with Tailwind CSS for the frontend, Firebase/Firestore for real-time data handling, and FastAPI (Python) for backend services — all containerized with Docker and deployed as a mobile app using Capacitor and Android Studio — the platform ensures scalability, performance, and cross-platform accessibility."
          ],
        },
        {
          id: 2,
          name: "greenplate.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/drive/folders/1trterdFixHr8bV4AK4TSwl2Y5GHQEgxp?usp=drive_link",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "greenplate.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/greenplate.png",
        },
        {
          id: 5,
          name: "UI.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://drive.google.com/drive/folders/1fFouXfsPd32Lx1MClBypoorR78Cusq77?usp=drive_link",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Students Discount Finder",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Student Discount Finder.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Student Discount Finder is a smart deal discovery platform designed exclusively for students with a .edu.in email.",

            "Instead of manually searching through multiple websites for student offers, the platform acts as a centralized search engine for verified discounts across tech, software, and lifestyle brands.",

            "Think of it as a curated savings hub — built to help students unlock exclusive benefits in just a few clicks.",

            "Built using React and Vite, the application delivers fast load times, smooth search functionality, and a clean, responsive user interface."
          ],
        },
        {
          id: 2,
          name: "student-discount-finder.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://student-discount-finder.netlify.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "student-discount-finder.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/student-discount-finder.png",
        },
        {
          id: 5,
          name: "Git.Code",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/StackUnderflow10/student-discount-finder",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "AI Smart Attendance app",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Smart Attendance app.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "SupVision-Venom is an AI-powered smart attendance system designed to automate and digitize attendance management.",

            "The platform replaces manual roll calls with intelligent backend processing, enabling real-time attendance tracking, improved accuracy, and elimination of discrepancies.",

            "Built using Flask, MongoDB, and Docker, the system follows a clean RESTful API architecture with secure user management and scalable database design. Its APIs are optimized for seamless integration with frontend applications such as Flutter, ensuring efficient cross-platform connectivity.",

            "Focused on scalability, performance, containerization, and efficient data handling, the solution demonstrates strong backend engineering, API development, and modern database management practices."
          ],
        },
        {
          id: 2,
          name: "ai-smart-attendance.code",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/file/d/142Eef4OFkgnRRe1f0LQTQQgYp6POHLq8/view?usp=sharing",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ai-smart-attendance.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/supvision.png",
        },
        {
          id: 5,
          name: "Git.Code",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/StackUnderflow10/venom",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/jeet.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me.jpg",
    },
    {
      id: 3,
      name: "casual-me-again.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/me2.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/jeet.jpg",
      description: [
        "Hi 👋🏻 I’m Jeet, a passionate Computer Science student who loves building full-stack applications that solve real-world problems. From authentication systems to backend APIs and scalable architectures, I enjoy turning ideas into working products.",

        "I believe great products are built by great teams — and I genuinely enjoy collaborating, contributing, and learning from others.",

        "When I’m not coding, I’m probably traveling, watching cricket or Formula 1, gaming, or playing cricket and badminton."
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };