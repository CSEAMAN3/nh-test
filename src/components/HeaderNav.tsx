'use client'
import { headerNav } from "@/lib/navigations";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {motion} from "framer-motion"
import { useState, useEffect } from "react";

export default function HeaderNav() {
  
  const pathname = usePathname()
  const [toggleNav, setToggleNav] = useState(false)
  const [navWidth, setNavWidth] = useState("100vw")

  useEffect(() => {
    const updateNavWidth = () => {
      if(window.innerWidth < 540) {
        setNavWidth("100vw")
      } else if(window.innerWidth < 700){
        setNavWidth("65vw")
      } else if(window.innerWidth < 900) {
        setNavWidth("55vw")
      } else {
        setNavWidth("45vw")
      }
    }

    updateNavWidth()

    window.addEventListener("resize", updateNavWidth)
    return () => window.removeEventListener("resize", updateNavWidth)
  }, [])


  return (
    <div className="z-50">
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
      <div className="lg:hidden">
        {/* burger nav */}
        <motion.div animate={toggleNav ? "open" : "close"}>
            <motion.div 
              className="bg-pitch-mid h-screen fixed top-0 right-0 overflow-y-scroll"
              style={{
                width: "0vw"
              }}
              variants={{
                open: {
                  width: navWidth
                },
                close: {
                  width: "0vw"
                }
              }}
            >
              <nav className="mt-32">
                <ul className="px-8">
                  {headerNav.map(link => {
                    const isActive = pathname === link.href
                    return (
                      <li key={link.href} className="mb-8 w-fit">
                        <Link href={link.href} className={`font-bold text-3xl ${isActive ? "text-electric-orange hover:text-electric-orange" : "text-primary-accent hover:text-electric-orange"}`}>{link.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </motion.div>
        </motion.div>
        {/* burger bars */}
        <motion.div 
          className={`w-8 h-8 mt-2 md:mt-4 group cursor-pointer top-4 right-8 ${toggleNav ? "fixed" : "absolute"}`}
          animate={toggleNav ? "open" : "close"}  
          onClick={() => setToggleNav(!toggleNav)}
          initial={false}
        >
          {/* top bar */}
          <motion.div 
            className="w-full h-[6px] bg-primary-accent group-hover:bg-off-white absolute transition-colors duration-300"
            style={{
              top: "0%",
              y: "0%",
              rotate: "0deg"
            }}
            variants={{
              open: {
                top: ["0%","50%", "50%"],
                y: ["0%", "-50%", "-50%"],
                rotate: ["0deg", "0deg", "45deg"]
              },
              close: {
                top: ["50%","50%", "0%"],
                y: ["-50%", "-50%", "0%"],
                rotate: ["45deg", "0deg", "0deg"]
              }
            }}
          />
          {/* middle bar */}
          <motion.div 
            className="w-full h-[6px] bg-primary-accent group-hover:bg-off-white absolute transition-colors duration-300"
            style={{
              top: "50%",
              y: "-50%",
              rotate: "0deg"
            }}
            variants={{
              open: {rotate: ["0deg", "0deg", "45deg"]},
              close: {rotate: ["45deg", "0deg", "0deg"]}
            }}
          />
          {/* bottom bar */}
          <motion.div 
            className="w-full h-[6px] bg-primary-accent group-hover:bg-off-white absolute transition-colors duration-300"
            style={{
              top: "100%",
              y: "-100%",
              rotate: "0deg",
            }}
            variants={{
              open: {
                top: ["100%" ,"50%", "50%"],
                y: ["-100%" ,"-50%", "-50%"],
                rotate: ["0deg" ,"0deg", "-45deg"],
              },
              close: {
                top: ["50%" ,"50%", "100%"],
                y: ["-50%" ,"-50%", "-100%"],
                rotate: ["-45deg" ,"0deg", "0deg"],
              },
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
