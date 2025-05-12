'use client'
import { headerNav } from "@/lib/navigations";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const pathname = usePathname()
  return (
    <>
      <ul className="hidden lg:flex gap-8 absolute bottom-4 left-[50%] translate-x-[-50%]">
          {headerNav.map(link => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link href={link.href} className={`font-bold text-lg ${isActive ? "text-grassroots hover:text-grassroots" : "text-primary-accent hover:text-off-white"} transition-all duration-200`}>{link.title}</Link>
              </li>
            )
          })}
      </ul>

    </>
  )
}
