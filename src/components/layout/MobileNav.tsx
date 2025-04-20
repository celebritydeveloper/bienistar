import {useState, FC} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabbar, Text } from "@telegram-apps/telegram-ui";
import { House, Coins, Users, Wallet, Dumbbell } from "lucide-react";
import { bem } from "@/css/bem.ts";
import { Link } from "../Link/Link";
import "./index.css"

const [, e] = bem("nav");



const MobileNav: FC = () => {
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      path: "/tabs/home",
      active: location.pathname.includes("/tabs/home") || location.pathname.endsWith("/home"),
      icon: <House />,
      height: 17,
      width: 18
    },
    {
      name: "Earn",
      path: "/tabs/earn",
      active: location.pathname.includes("/tabs/earn") || location.pathname.endsWith("/earn"),
      icon: <Dumbbell />,
      height: 19,
      width: 33
    },
    {
      name: "Friends",
      path: "/tabs/friends",
      active: location.pathname.includes("/tabs/friends") || location.pathname.endsWith("/friends"),
      icon: <Users />,
      height: 19,
      width: 19
    },
    {
      name: "Wallet",
      path: "/tabs/wallet",
      active: location.pathname.includes("/tabs/wallet") || location.pathname.endsWith("/wallet"),
      icon: <Wallet />,
      height: 19,
      width: 22
    },
];
  const [currentTab, setCurrentTab] = useState(navItems[0].name);

  const navigateTab = (name: any) => {
    setCurrentTab(name);
  }

  

  return (
    <div className="layout-tabs tabs" data-platfom="andriod">
      { navItems.map((item, index) => {
        return (
          <Link to={item.path} key={index} data-status={item.name}
            className={`${item.name === currentTab ? "tab" : "tab"
          }`}
            onClick={() => navigateTab(item.name)}
            data-icon-status="andriod"
          >
            <div
              className={`${item.name === currentTab ? "kit-icon icon kit-icon-active" : "kit-icon icon"
              }`}
            >
              {item.icon}
            </div>
            <span className={`${item.name === currentTab ? "label is-active" : "label"
              }`}>{item.name}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default MobileNav;
