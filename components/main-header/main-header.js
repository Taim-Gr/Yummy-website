import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import HeaderBackground from "./header-background";
import { usePathname } from "next/navigation";
import NavLinkHeader from "./nav-link";
import yummyLogo from "@/assets/yummylogo.svg";
export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={yummyLogo} alt="a plate with food on it" />
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLinkHeader startText="/meals" text="Browse Meals" />
            </li>
            <li>
              <NavLinkHeader startText="/community" text="Foodies Community" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
