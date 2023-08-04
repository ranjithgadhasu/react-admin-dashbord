import { BiHomeAlt } from 'react-icons/bi';
import { HiOutlineClipboardList } from "react-icons/hi";
import { BiGroup } from 'react-icons/bi';
import { LuBookMarked } from 'react-icons/lu';
import { AiOutlineProject } from 'react-icons/ai';
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { AiOutlinePrinter } from "react-icons/ai";

import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";




//Sidebar Data
export const SidebarData = [
    {
      icon:  BiHomeAlt,
      heading: "dashbord",
    },

    {
        icon:  HiOutlineClipboardList,
        heading: "Orders",
      },
      {
        icon:  BiGroup,
        heading: "Customers",
      },
      {
        icon:  LuBookMarked,
        heading: "Product",
      },
      {
        icon:   AiOutlineProject ,
        heading: "Analytics",
      }
];


export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: RiMoneyDollarBoxLine,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: AiOutlinePrinter,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: HiOutlineClipboardList,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
