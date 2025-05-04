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
    title: "Harman Kardon UI Exploration",
    description:
      "Explored user interface concepts for Harman Kardon’s audio products, focusing on elegant control systems for immersive media experiences. Emphasized sleek visual design and intuitive interaction models to align with the brand’s premium positioning.",
    tags: ["Other UI / UX (01/03)", "UI & UX (09/11)"],
    leftIcon: [<HiCursorClick key="licon" />],
    rightIcon: [<IoDesktop key="ricon" />],
    colorBG: "bg-yellow-500",
    colorFont: "text-yellow-500",
    icon: [<CgFigma key="icon" />],
    href: "/other-uiux/harman-kardon",
    status: "active",
  },
  {
    title: "Pedigree Club PH",
    description:
      "Designed a branded microsite for Pedigree Philippines aimed at increasing engagement among dog owners.The UX focused on easy onboarding and redeemable loyalty features to build community and promote healthy habits.",
    tags: ["Curated (02/03)", "UI & UX (10/11)"],
    leftIcon: [<HiCursorClick key="licon" />],
    rightIcon: [<IoDesktop key="ricon" />],
    colorBG: "bg-yellow-500",
    colorFont: "text-yellow-500",
    icon: [<CgFigma key="icon" />],
    href: "/other-uiux/pedigree-club-ph",
    status: "active",
  },
  {
    title: "Add2Cart",
    description:
      "Created a quick prototype for a startup Add2Cart. Delivered interaction flows and UI design optimized for conversion during campaign periods for mobile version.",
    tags: ["Curated (03/03)", "UI & UX (11/11)"],
    leftIcon: [<HiCursorClick key="licon" />],
    rightIcon: [<FaMobileButton key="ricon" />],
    colorBG: "bg-green-500",
    colorFont: "text-green-500",
    icon: [<CgFigma key="icon" />],
    href: "/",
    status: "inactive",
  },
];
