"use client"

import { headerItems, userInfo } from "@/app/constants/constant"
import { NavItems } from "../models/header"
import { BiMenu } from 'react-icons/bi'
import { useState } from "react"
import Link from "next/link"

const Header = () => {
  const [navItems, showNavItems] = useState<boolean>(false);

  return (
    <header className="bg-white p-6 justify-between fixed top-0 z-10 md:flex w-full">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{userInfo.name}</h2>
        <BiMenu className="size={30} md:hidden" onClick={() => showNavItems(prevState => !prevState)} />
      </div>

      <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${navItems ? 'block' : 'hidden'}`}>
        {Object.keys(headerItems).map(item => (
          <Link  
            href={`/pages/${headerItems[item as keyof NavItems].page}`}
            key={headerItems[item as keyof NavItems].label}
            className="block md:inline-block cursor-pointer"
          >
            {headerItems[item as keyof NavItems].label}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header



