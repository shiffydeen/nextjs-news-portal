"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const MobileMenu = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen)
    }

  return (
    <div className='lg:hidden'>
                <Button onClick={toggleMobileMenu}>
                    {
                        isMobileOpen ? (<AiOutlineClose size={24}/>) : (<AiOutlineMenu size={24}/>)
                    }
                </Button>
            </div>
  )
}

export default MobileMenu
