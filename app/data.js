import { FaChartLine, FaCloudflare } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import { IoDesktop, IoLogoVercel } from "react-icons/io5";
import { RiHeart3Fill, RiNextjsFill } from "react-icons/ri";
import { SiAdobexd } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { HiCursorClick } from "react-icons/hi";

export const caseStudies = [
  {
    title: "Digital Shelf & E-commerce",
    description:
      "Designed internal tools for managing product visibility and performance on Shopee and Lazada. Focused on harmonizing data pipelines with distinct technical ecosystems.",
    tags: ["\\\\01", "UI & UX (01/11)"],
    leftIcon: [<FaChartLine key="licon" />],
    rightIcon: [<IoDesktop key="ricon" />],
    colorBG: "bg-green-500",
    colorFont: "text-green-500",
    icon: [<CgFigma key="icon" />],
    href: "/digital-shelf-and-ecommerce",
    status: "active",
  },
  {
    title: "Business Messaging Platform",
    description:
      "Created a multi-channel messaging system integrating WhatsApp and Line. Developed two core UX flows: an agent-facing dashboard and a visual chatbot builder.",
    tags: ["\\\\02", "UI & UX (02/11)"],
    leftIcon: [<FaChartLine key="licon" />],
    rightIcon: [<IoDesktop key="ricon" />],
    colorBG: "bg-green-500",
    colorFont: "text-green-500",
    icon: [<CgFigma key="icon" />],
    href: "/business-messaging-platform",
    status: "active",
  },
  {
    title: "Humble Sustainability",
    description:
      "Collaborated with a circular economy startup to design a platform for reselling surplus goods. Designed the initial mobile and desktop version.",
    tags: ["\\\\03", "UI & UX (03/11)"],
    leftIcon: [<HiCursorClick key="licon" />],
    rightIcon: [<IoDesktop key="ricon" />],
    colorBG: "bg-green-500",
    colorFont: "text-green-500",
    icon: [<SiAdobexd key="icon" />],
    href: "/humble-sustainability",
    status: "active",
  },
  {
    title: "Kansai Electric FTS",
    description:
      "Redesigned internal trading dashboards for KEFTS, an LNG subsidiary of Kansai Electric. Streamlined complex data visualizations and workflows for international energy trading across time zones.",
    tags: ["\\\\04", "UI & UX (04/11)"],
    leftIcon: [<HiCursorClick key="licon" />],
    rightIcon: [<IoDesktop key="ricon" />],
    colorBG: "bg-green-500",
    colorFont: "text-green-500",
    icon: [<CgFigma key="icon" />],
    href: "/kansai-electric-fts",
    status: "active",
  },

  {
    title: "Personal Portfolio",
    description:
      "A living portfolio project to explore design systems, motion design, and front-end development with tools like Next.js, Framer Motion, and Cloudflare. Constantly evolving with my skills.",
    tags: ["\\\\05", "UI & UX (05/11)"],
    leftIcon: [<RiHeart3Fill key="licon" />],
    rightIcon: [<IoDesktop key="ricon" />],
    colorBG: "bg-orange-500",
    colorFont: "text-orange-500",
    icon: [
      <CgFigma key="icon" />,
      <RiNextjsFill key="icon" />,
      <TbBrandFramerMotion key="icon" />,

      <IoLogoVercel key="icon" />,
    ],
    href: "/portfolio",
    status: "active",
  },
  {
    title: "CPU Mobile App",
    description:
      "Designed an early mobile app prototype for Central Philippine University to enhance student access to campus services, reflecting core UX values of clarity and accessibility.",
    tags: ["\\\\06", "UI & UX (06/11)"],
    leftIcon: [<HiCursorClick key="licon" />],
    rightIcon: [<FaMobileButton key="ricon" />],
    colorBG: "bg-yellow-500",
    colorFont: "text-yellow-500",
    icon: [<SiAdobexd key="icon" />],
    href: "/cpu-app",
    status: "active",
  },
  {
    title: "Liva Auto",
    description:
      "Developed a user-friendly platform for buying and selling certified used Honda vehicles. Focused on trust, ease of navigation, and vehicle detail clarity for the Indonesian market.",
    tags: ["\\\\07", "UI & UX (07/11)"],
    leftIcon: [<HiCursorClick key="licon" />],
    rightIcon: [<FaMobileButton key="ricon" />],
    colorBG: "bg-green-500",
    colorFont: "text-green-500",
    icon: [<CgFigma key="icon" />],
    href: "/liva-auto",
    status: "active",
  },
  {
    title: "Kawasaki India",
    description:
      "Crafted responsive e-commerce wireframes for the Indian market, designed to integrate into a future digital ecosystem.",
    tags: ["\\\\08", "UI & UX (08/11)"],
    leftIcon: [<HiCursorClick key="licon" />],
    rightIcon: [<IoDesktop key="ricon" />],
    colorBG: "bg-green-500",
    colorFont: "text-green-500",
    icon: [<CgFigma key="icon" />],
    href: "/kawasaki-india",
    status: "inactive"
  },
  
    {
    title: "EYS Internation and SG",
    description:
      "Explored user interface concepts for Harman Kardon’s audio products, focusing on elegant control systems for immersive media experiences. Emphasized sleek visual design and intuitive interaction models to align with the brand’s premium positioning.",
    tags: ["Other UI / UX (01/03)", "UI & UX (09/11)"],
    leftIcon: [<HiCursorClick key="licon" />],
    rightIcon: [<IoDesktop key="ricon" />],
    colorBG: "bg-yellow-500",
    colorFont: "text-yellow-500",
    icon: [<CgFigma key="icon" />],
    href: "/other-uiux/harman-kardon",
    status: "inactive",
  },

];
