"use client"
import { PRODUCT_CATEGORIES } from '@/config'
import React, { useState } from 'react'

// Component for different items used on the navbar
const NavItems = () => {

    // State hook with <> typescript generic values of only null or number with a default value of null
    const [activeIndex, setActiveIndex] = useState<null | number>(null)

  return (
    <div className='flex gap-4 h-full'>
      {PRODUCT_CATEGORIES.map((category, i) => {
        
        {/*Check for opened navbar items*/}
        const handleOpen = () => {
          if(activeIndex === i){
            setActiveIndex(null)
          } else{
            setActiveIndex(i)
          }
        }

        const isOpen = i === activeIndex

        return (
          
        )
      })}
    </div>
  )
}

export default NavItems