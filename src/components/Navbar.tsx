'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import { Switch } from "@/components/ui/switch"
  import { Button } from "@/components/ui/button"
  import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileMenu from './MobileMenu'
import { usePathname } from 'next/navigation'




const Navbar = () => {
   
const pathname = usePathname();

  return (
    <header className='py-4 bg-white shadow-md text-gray-900 transition-colors duration-300'>
        <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8'>
            {/* logo */}
            <div className='font-bold txt-xl'>
                <Link href='/'>Daily News</Link>
            </div>

            {/* desktop navigation */}
            <NavigationMenu className='hidden lg:flex'>
                <NavigationMenuList className='flex space-x-8'>

                    <NavigationMenuItem>
                        <NavigationMenuLink href='/news' className={`${pathname === '/news' ? 'text-red-500 font-semibold' : ''}hover:text-gray-600`}>News</NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='dark:bg-gray-900 dark:text-white'>Services</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>
                                <ul className='text-gray-600 shadow-md rounded-md py-4 px-5 space-y-2'>
                                    <li>
                                        <NavigationMenuLink href='/services/web-development' className='hover:text-gray-600'>
                                         Web Development
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href='/services/app' className='hover:text-gray-600'>
                                         Mobile Apps
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href='/services/seo' className='hover:text-gray-600'>
                                         SEO
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                        <NavigationMenuLink href='/about' className={`${pathname === '/about' ? 'text-red-500 font-semibold' : ''}hover:text-gray-600`}>About</NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href='/contact' className={`${pathname === '/contact' ? 'text-red-500 font-semibold' : ''}hover:text-gray-600`}>Contact</NavigationMenuLink>
                    </NavigationMenuItem>


                </NavigationMenuList>
            </NavigationMenu>

            {/* color switcher and login btn */}
            <div className='hidden lg:flex items-center space-x-4'>
                <div className='flex items-center'>
                    <span className='mr-2'>Dark Mode</span>
                    <Switch />
                </div>
                <Button variant="default" className='px-6'>Login</Button>
            </div>

            {/* hamburger menu for mobile */}
           <MobileMenu />
        </nav>
    </header>
  )
}

export default Navbar
