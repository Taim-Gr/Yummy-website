"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./nav-link.module.css";
export default function NavLinkHeader({ text, startText }) {
  const path = usePathname();
  return (
    <Link
      href={startText}
      className={
        path.startsWith(startText)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {text}
    </Link>
  );
}
