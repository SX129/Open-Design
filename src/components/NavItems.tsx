"use client"
import React, { useState } from 'react'

// Component for different items used on the navbar
const NavItems = () => {

    // State hook with <> typescript generic values of only null or number with a default value of null
    const [activeIndex, setActiveIndex] = useState<null | number>(null)
  return (
    <div className='flex gap-4 h-full'></div>
  )
}

export default NavItems